
// Programacion estructural 101
// Progamacion orientada a objetos

class Car {

    //(Readonly) Una vez creada no se puede modificar
    readonly brand: string; 

    doors: number;
    fuelTank: number;
    isRunning: boolean;
    type: string;

    // (Private) Protege la propiedad para que solo pueda ser usada dentro de la misma clase
    private createdAt: number;

    constructor( brand: string, type: string ){
        this.brand = brand;
        this.doors = 0 ;
        this.fuelTank = 0 ;
        this.isRunning = false;
        this.type = type;

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
            newFuelTank =100
        } else{

            this.fuelTank = newFuelTank;
        }

        
    }
    
}

let myMazda = new Car("Mazda", "Sedan");

console.log(myMazda);
myMazda.fillTank(90);
myMazda.turnOn();
console.log(myMazda);
