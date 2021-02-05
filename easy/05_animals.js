class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }
  introduce() {
    return `Hi, my name is ${this.name}. I'm ${this.age} & ${this.status}.`;
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, 'cat', status);

    // super(name, age);
    // this.legs = 4;
    // this.species = this.constructor.name.toLowerCase();
    // this.status = status;
  }
  introduce() {
    return `${super.introduce()} Meow, meow!`;
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, 'dog', status);
    this.master = master;

    // super(name, age);
    // this.legs = 4;
    // this.species = this.constructor.name.toLowerCase();
    // this.status = status;
    // this.master = master;
  }
  greetMaster() {
    return `Hi ${this.master}! Woof, woof!`;
  }
}

let abby = new Cat('Abby', 3, 'happy');
let wolfy = new Dog('Wolfy', 4, 'big', 'Boss');

console.log(abby.introduce() + '\n' + wolfy.introduce() + '\n' + wolfy.greetMaster());
