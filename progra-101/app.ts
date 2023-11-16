
import { addTwoNumbers } from './helpers/math-helpers';
import { substractTwoNumbers } from './helpers/math-helpers';
import { divideTwoNumbers } from './helpers/math-helpers';
import { timesTwoNumbers } from './helpers/math-helpers';

let numero1: number = 7;
let numero2: number = 7;

let total1:number = addTwoNumbers(numero1, numero2);
let total2:number = substractTwoNumbers(numero1, numero2);
let total3:number = timesTwoNumbers(numero1, numero2);
let total4:number = divideTwoNumbers(numero1, numero2);

console.log("La suma es:" ,total1);
console.log("La resta es:" ,total2);
console.log("La multiplicacion es:" ,total3);
console.log("La division es:" ,total4);