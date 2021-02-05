class Person {
  constructor(name) {
    this.name = name;
  }
  gait() {
    return 'strolls';
  }
}

class Cat {
  constructor(name) {
    this.name = name;
  }
  gait() {
    return 'saunters';
  }
}

class Cheetah {
  constructor(name) {
    this.name = name;
  }
  gait() {
    return 'runs';
  }
}

let walkMixin = {
  walk() {
    console.log(`${this.name} ${this.gait()} forward`);
  }
}

Object.assign(Person.prototype, walkMixin);
Object.assign(Cat.prototype, walkMixin);
Object.assign(Cheetah.prototype, walkMixin);

let mike = new Person('Mike');
let abby = new Cat('Abby');
let chester = new Cheetah('Chester');

mike.walk();
abby.walk();
chester.walk();
