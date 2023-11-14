
//console.log('Hola Mundo 2');

//Programacion secuencial
let numbersOfLines = 1;

/* console.log('Linea #', numbersOfLines);
numbersOfLines++;

console.log('Linea #', numbersOfLines);
numbersOfLines++;

console.log('Linea #', numbersOfLines);
numbersOfLines+=1;

console.log('Linea #', numbersOfLines); */

//Funciones en JavaScript

export function printLineNumber(){
    console.log('Linea #', numbersOfLines);
    numbersOfLines +=1;
}

printLineNumber();
printLineNumber();
printLineNumber();
printLineNumber();