import { useEffect, useState } from 'react';
import './App.css';
import { HangImage } from './components/HandImage';
import {letters} from './helpers/letters';
import { getRamdonWord } from './helpers/getWord';

function App() {

  const [ word, setWord ] = useState( getRamdonWord );
  const [ hiddenWord, setHiddenWord ] = useState( "_ ".repeat(word.length) );
  const [ attempts, setAttempts ] = useState(0);
  const [ lose, setLose ]= useState( false );
  const [ won, setWon ]= useState( false );

  //Determinar si la persona perdio
  useEffect( () => {

    if (attempts >= 9 ){
      setLose( true );
    }

  }, [ attempts ]);


  //Determinar si la persona gano
  useEffect( () => {

    const currentHiddenWord = hiddenWord.split(" ").join("");
    if (currentHiddenWord === word) {
      setWon(true);
    }


  }, [ hiddenWord ])

  

  const checkLetter = ( letter: string ) => {

    if ( lose ) return;
    if ( won ) return;

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

  const newGame = () => {

    const newWord = getRamdonWord();
    setWord(newWord);
    setHiddenWord("_ ".repeat(newWord.length));
    setAttempts(0);
    setLose(false);
    setWon(false);

  }


  return (
    <div className='App'>

          {/* Imagenes */}
          <HangImage imageNumber={ attempts }/>

          {/* Palabra oculta */}
          <h3> { hiddenWord } </h3>

          {/* Contador de intentos */}
          <h3> Intentos : { attempts }</h3>

          {/* Mensaje de perdio */}
          {
            ( lose ) 
              ? <h2>Perdio {word} </h2> 
              : ""
          }

          {/* Mensaje de gano */}
          {
            ( won ) 
              ? <h2>Felicidades usted gano</h2> 
              : ""
          }

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

          <br /><br />
          <button onClick={ () => newGame() }>¿Nuevo juego?</button>

    </div>
  );
   
};

export default App
