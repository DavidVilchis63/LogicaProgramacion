
//Ejercicio 9

// Crear una función que reciba un arreglo como argumento, la función debe de retornar un nuevo arreglo pero filtrando todos los nombres que empiezan con una determinada letra.

//Tip: Para determinar si un string empieza con una letra
//let hero = ‘Spiderman';
//hero.startsWith(’S’); // true

//Si se tiene un arreglo vació, por ejemplo:
//let newHeroes = [];
//Se puede insertar en el arreglo así:
//newHeroes.push('Hulk');


function heroesThatStartsWith (nameList: string[], letter: string) {

    let newNameList: string[] = [];
    let newHero: string[] = [];
    
    for (let i =0; i < nameList.length; i++){

        let hero: string = nameList[i];
        if( hero.startsWith(letter)){          

            newHero.push(hero);
        }
    }

    return newHero;
}

let heroes1 = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel'];

let herosWithLetterS = heroesThatStartsWith( heroes1, 'H' );
console.log( herosWithLetterS ); // She Hulk, Spiderman
