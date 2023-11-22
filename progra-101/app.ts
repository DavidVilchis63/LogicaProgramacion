
// Arreglos de objetos

interface Person {
    name: string;
    age: number;
    isActive: boolean;
}



let fernando: Person = {
    name: "Fernando",
    age: 25,
    isActive: true
};

let luisa: Person = {
    name: "Luisa",
    age: 32,
    isActive: false
};

let maggie: Person = {
    name: "Maggie",
    age: 26,
    isActive: false
};

let people: Person[] = [fernando , luisa, maggie];

for ( let i = 0; i < people.length; i++) {
    let person = people[i];
    console.log(person.name + " " + person.age );
}