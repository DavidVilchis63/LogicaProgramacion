
// Ejercicio 8

// Crear una función que reciba como argumento un arreglo, la función debe de retornar el nombre que tenga más letras del arreglo, y debe de trabajar así: 

// Tip: 
// let hero = 'Strider'; 
// hero.length; // 7


function largestNameOfArray (nameArray: string[]) {

    let nombreComparar = nameArray[0];

    for (let i= 1; i < nameArray.length; i++){

        if(nameArray[i].length > nombreComparar.length){
            nombreComparar = nameArray[i];

        }

    }

    return nombreComparar;

}




let heroes = ['Deadpool', 'Ciclope', 'Magneto', 'Profesor Charles Xavier']; 

let hero = largestNameOfArray(heroes); 
console.log( hero ); // Profesor Charles Xavier 
