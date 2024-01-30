
// Programacion estructural 101
// Progamacion orientada a objetos

class Car {

    brand: string;
    doors: number;
    fuelTank: number;
    isRunning: boolean;
    type: string;

    createdAt: number;

    constructor(){
        this.brand = "No brand";
        this.doors = 0 ;
        this.fuelTank = 0 ;
        this.isRunning = false;
        this.type = "No type";

        this.createdAt = 123456789;
    }

    turnOn(){

        if (this.isRunning){
            console.log("El carro ya estaba encendido..daño en motor")
            return;
        }

        if ( this.fuelTank <= 0){
            console.log("El carro no tiene gasolina");
            return;
        }
        
        this.isRunning = true;
        console.log("El carro esta encendido");


        
    }
    
}

let myMazda = new Car();

console.log(myMazda);
myMazda.turnOn();
console.log(myMazda);
