class Cat {
  constructor(name) {
    this.name = name;
  }
  speaks() {
    return `${this.name} says meow.`;
  }
}

let fakeCat = Object.create(Cat.prototype);

console.log(fakeCat instanceof Cat);
// true if C.prototype is somewhere in the object’s chain

console.log(fakeCat.name);
console.log(fakeCat.speaks());
