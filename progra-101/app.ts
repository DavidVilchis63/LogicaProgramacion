
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

    fillTank( gas: number){

        if (gas <= 0){
            console.log("No se aceptan valores negativos");
            return;
        }

        let newFuelTank = this.fuelTank + gas;

        if (newFuelTank >= 100){
            this.fuelTank =100
        } else{

            this.fuelTank = 100;
        }

        
    }
    
}

let myMazda = new Car();

console.log(myMazda);
myMazda.fillTank(90);
myMazda.fillTank(90);
myMazda.turnOn();
console.log(myMazda);
