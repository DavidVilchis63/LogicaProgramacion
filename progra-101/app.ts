
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

// Imprimir todo el contenido del objeto
console.log(person);

// Imprime una propiedad especifica del objeto
console.log(person.age);

person.toString();