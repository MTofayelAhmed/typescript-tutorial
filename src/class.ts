// class Animal {
//   name: string;
//   species: string;
//   sound: string;

//   constructor(name: string, species: string, sound: string) {
//     this.name = name;
//     this.species = species;
//     this.sound = sound;
//   }

//   makeSound() {
//     console.log(`${this.name}is making sound ${this.sound}   `);
//   }
// }
// const dog = new Animal("DOg", "doggi", "ghew ghew");

// dog.makeSound();

// console.log(dog.name);

// parameter properties
class Animal {
  constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {}

  makeSound() {
    console.log(`${this.name}is making sound ${this.sound}   `);
  }
}
const dog = new Animal("DOg", "doggi", "ghew ghew");

dog.makeSound();

console.log(dog.name);
