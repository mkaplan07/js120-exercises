class Vehicle {
  constructor(make, model, wheels) {
    this.make = make;
    this.model = model;
    this.wheels = wheels;
  }

  getWheels() {
    return this.wheels;
  }

  info() {
    return `${this.make} ${this.model}`;
  }
}

class Car extends Vehicle {
  constructor(make, model) {
    super(make, model, 4); // corresponds to Vehicle params
  }
}

class Truck extends Vehicle {
  constructor(make, model, payload) {
    super(make, model, 18); // corresponds to Vehicle params
    this.payload = payload;
  }
}

let honda = new Car('Honda', 'Civic');
let mack = new Truck('Mack', 'Big Rig', 'rocks');

console.log(honda.info(), `\nwheels: ${honda.getWheels()}`);
console.log(mack.info(), `\nwheels: ${mack.getWheels()}`, `\npayload: ${mack.payload}`);
