
//Ejercicio 5

//Dado el siguiente arreglo: 
//let numbers = [1, 6, 8, 4, 2, 7, 10, 3, 5 ]; 
//Haga una impresión en consola así: 
 
// 1 es un número impar 
// 2 es un número par
// 3 es un número impa


let numbers1 = [1, 6, 8, 4, 2, 7, 10, 3, 5 ]; 

for (let i=0; i < numbers1.length; i++) {

    if (numbers1[i] % 2 === 0) {
        console.log("El numero es par:", numbers1[i]);
    } else{
        console.log("El numero es impar:", numbers1[i]);
    }

    
}
