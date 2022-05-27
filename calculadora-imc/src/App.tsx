import { useState } from 'react';
import styles from './App.module.css';
import poweredImage from './assets/powered.png';
import { levels, calculateimc, Level } from './helpers/imc';
import { GridItem } from './components/GridItem';
import leftArrowImage from './assets/leftarrow.png'
const App = () => {
  const [heightfield, setHeightField] = useState<number>(0);
  const [weightfield, setWeightField] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null>(null);

  const handleCalculatorButton = () => {
      if (heightfield && weightfield) {
        setToShow(calculateimc(heightfield, weightfield));
      } else {
        alert("Preencha todos os campos corretamente")
      }
    }

    const handleBackButton = () => {
      setToShow(null);
      setHeightField(0);
      setWeightField(0);
    }
  return(
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} alt="" width={150}/>
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC</h1>
          <p>IMC é a sigla para Índice de Massa Corporal, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>
          <input
            type="number"
            placeholder="Digite a sua altura. Exemplo: 1.5 (em metros)"
            value={heightfield > 0 ? heightfield : ''}
            onChange={e => setHeightField(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          />
          <input
            type="number"
            placeholder="Digite o seu peso. Exemplo: 75.3 (em quilos)"
            value={weightfield > 0 ? weightfield : ''}
            onChange={e => setWeightField(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          />
          <button onClick={handleCalculatorButton} disabled={toShow ? true : false}>Calcular</button>
        </div>
        <div className={styles.rightSide}>
          {!toShow && 
            <div className={styles.grid}>
              {levels.map((item, key) => (
                <GridItem key={key} item={item}/>
              ))}
            </div>
          }
          {toShow &&
            <div className={styles.rightBig}>
              <div className={styles.rightArrow} onClick={handleBackButton}>
                <img src={leftArrowImage} alt="" width={25}/>
              </div>
              <GridItem item={toShow}/>
            </div>
          }
        </div>
      </div>
    </div>
  );
}
export default App;
