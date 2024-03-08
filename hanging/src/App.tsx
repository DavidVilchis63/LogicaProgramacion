import { useState } from 'react';
import './App.css';
import { HangImage } from './components/HandImage';
import {letters} from './helpers/letters';

function App() {

  const [ word ] = useState( "COMPUTADORA" );
  const [ hiddenWord, setHiddenWord ] = useState( "_ ".repeat(word.length) );
  const [ attempts, setAttempts ] = useState(0);

  const checkLetter = ( letter: string ) => {

    if ( !word.includes(letter)) { 

      setAttempts ( Math.min ( attempts + 1, 9 ));
      return;
    }

    const hiddenWordArray = hiddenWord.split(" ");
    for ( let i = 0; i < word.length; i++){

      if ( word[i] === letter){
        hiddenWordArray[i] = letter;
      }
      
    }
    setHiddenWord(hiddenWordArray.join(" "));
  }


  return (
    <div className='App'>

          {/* Imagenes */}
          <HangImage imageNumber={ attempts }/>

          {/* Palabra oculta */}
          <h3> { hiddenWord } </h3>

          {/* Contador de intentos */}
          <h3> Intentos : { attempts }</h3>

          {/* Botones */}
          {
            letters.map( (letter) => (
              <button
              
                onClick={ () => checkLetter(letter) }
                
                key= { letter }>
                  { letter }
              </button>
            ))
          }

    </div>
  );
   
};

export default App
