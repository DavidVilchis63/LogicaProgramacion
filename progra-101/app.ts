
// Objetos literales

let person = {
    name: "Melissa",
    age: 30,
    isActive: true,
    hobbies: ["soccer", "music"],
    toString () {
        let objectoString = this.name + " " + this.age; 
        console.log( objectoString );
    }

}

// // Imprimir todo el contenido del objeto
// console.log(person);

// // Imprime una propiedad especifica del objeto
// console.log(person.age);

// person.toString();

let car = {
    model: "Focus",
    brand: "Ford",
    year: 2002,
    color: "White"
}

let smartTV ={
    brand: "LG",
    model: 2023,
    color: "Black",
    resolution: "4K"
}

let youTubeVideo = {
    year: 2022,
    user: "Udemy",
    time: 3600,
    views: 2153
}

console.log(car);
console.log(smartTV);
console.log(youTubeVideo);