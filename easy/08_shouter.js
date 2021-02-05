/*
function Person() {}
Person.prototype.greet = function(msg) {
  console.log(msg);
}

function Shouter() {}
Shouter.prototype = Object.create(Person.prototype);
                    // {} that inherits from Person.prototype
Shouter.prototype.greet = function(msg) {
  Object.getPrototypeOf(this).greet(msg.toUpperCase());

  // Person.prototype.greet.call(this, msg.toUpperCase());
}

let alice = new Person();
let bob = new Shouter();

alice.greet('hi');
bob.greet('hi');
*/

class Person {
  greet(msg) {
    return msg;
  }
}

class Shouter extends Person {
  greet(msg) {
    return super.greet(msg).toUpperCase();
  }
}

let alice = new Person();
let bob = new Shouter();

console.log(alice.greet('hi'));
console.log(bob.greet('hi'));
