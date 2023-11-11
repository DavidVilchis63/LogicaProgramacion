
//console.log('Hola Mundo 2');

//Programacion secuencial
let numbersOfLines = 1;

console.log('Linea #', numbersOfLines);
numbersOfLines++;

console.log('Linea #', numbersOfLines);
numbersOfLines++;

console.log('Linea #', numbersOfLines);
numbersOfLines+=1;

console.log('Linea #', numbersOfLines);
numbersOfLines = numbersOfLines + 1;

//Funciones en JavaScript

function increaseLineNumber(){
    numbersOfLines +=3;
}

increaseLineNumber()
console.log('Linea #', numbersOfLines);

increaseLineNumber()
console.log('Linea #', numbersOfLines);

increaseLineNumber()
console.log('Linea #', numbersOfLines);