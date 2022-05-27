import { useState } from 'react';
import styles from './App.module.css';
import poweredImage from './assets/powered.png';
import { levels, calculateimc } from './helpers/imc';
import { GridItem } from './components/GridItem';
const App = () => {
  const [heightfield, setHeightField] = useState<number>(0);
  const [weightfield, setWeightField] = useState<number>(0);

  const handleCalculatorButton = () => {
      if (heightfield && weightfield) {

      } else {
        alert("Preencha todos os campos corretamente")
      }
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
          />
          <input
            type="number"
            placeholder="Digite o seu peso. Exemplo: 75.3 (em quilos)"
            value={weightfield > 0 ? weightfield : ''}
            onChange={e => setWeightField(parseFloat(e.target.value))}
          />
          <button onClick={handleCalculatorButton}>Calcular</button>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.grid}>
            {levels.map((item, key) => (
              <GridItem key={key} item={item}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
