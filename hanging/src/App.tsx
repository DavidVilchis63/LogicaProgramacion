import './App.css';
import {letters} from './helpers/letters';

function App() {

  return (
    <div className='App'>

          {/* Imagenes */}
          <h3>Imagen del juego</h3>

          {/* Palabra oculta */}
          <h3>_ _ _ _ _ _ _ _ _ _</h3>

          {/* Contador de intentos */}
          <h3> Intentos : 0</h3>

          {/* Botones */}
          {
            letters.map( (letter) => (
              <button 
               key= { letter }>
                { letter }
              </button>
            ))
          }

    </div>
  );
   
};

export default App
