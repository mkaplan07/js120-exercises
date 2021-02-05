class Pet {
  constructor(type, name) {
    this.type = type;
    this.name = name;
  }
  info() {
    return `a ${this.type} named ${this.name}`;
  }
}

class Owner {
  constructor(name) {
    this.name = name;
    this.pets = [];
  }
  addPet(pet) {
    this.pets.push(pet);
  }
  countPets() {
    return this.pets.length;
  }
  printPets() {
    this.pets.forEach(pet => console.log(pet.info()));
  }
}

class Shelter {
  constructor() {
    this.guests = [];
    this.adopters = [];
  }
  welcome(pet) {
    this.guests.push(pet);
  }
  adopt(owner, pet) {
    owner.addPet(pet);

    if (!this.adopters.includes(owner)) {
      this.adopters.push(owner);
    }

    let idx = this.guests.indexOf(pet);
    this.guests.splice(idx, 1);
  }
  countGuests() {
    return this.guests.length;
  }
  printAdoptions() {
    this.adopters.forEach(adopter => {
      console.log(`${adopter.name} has adopted ${adopter.countPets()} pets:`);
      adopter.printPets();
    });
  }
}

let butterscotch = new Pet('cat', 'Butterscotch');
let pudding      = new Pet('cat', 'Pudding');
let asta         = new Pet('dog', 'Asta');
let laddie       = new Pet('dog', 'Laddie');
let fluffy       = new Pet('cat', 'Fluffy');
let ben          = new Pet('cat', 'Ben');
let bluebell     = new Pet('parakeet', 'Bluebell');

let phanson = new Owner('P Hanson');
let bholmes = new Owner('B Holmes');

let shelter = new Shelter();

let guests = [butterscotch, pudding, asta, laddie, fluffy, ben, bluebell];
guests.forEach(guest => shelter.welcome(guest));

shelter.adopt(phanson, butterscotch);
shelter.adopt(phanson, pudding);
shelter.adopt(bholmes, asta);
shelter.adopt(bholmes, laddie);
shelter.adopt(bholmes, bluebell);

shelter.printAdoptions();
console.log(`${phanson.name} has ${phanson.countPets()} adopted pets.`);
console.log(`${bholmes.name} has ${bholmes.countPets()} adopted pets.`);
console.log(`This shelter has ${shelter.countGuests()} unadopted pets.`);
