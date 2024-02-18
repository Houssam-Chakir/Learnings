"use strict";

const Person = function (name, birthyear) {
  this.firstname = name;
  this.bd = birthyear;

  //! Dont create functions inside the constructors like this
  // const calcAge = function() {
  //   return 2037 - this.bd
  // }
  //!
};

Person.prototype.calcAge = function () {
  return 2037 - this.bd;
};

const me = new Person("houssam", 1999);
console.log(me); // Person { firstname: 'houssam', bd: 1999 }
console.log(Person.prototype);

const arr = [1, 2, 3, 4, 5, 5, 6, 7, 7];
console.dir(Array.prototype);

// coding challenge
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  this.speed += 10;
};
Car.prototype.brake = function () {
  this.speed -= 5;
};

const bmw = new Car("BMW", 120);

console.log(bmw);
bmw.accelerate(); // 130
console.log(bmw);
bmw.brake(); // 125
console.log(bmw);

//* using ES6 Classes
class CarCl {
  constructor(make, speed) {
    this.maker = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
  }
  brake() {
    this.speed -= 5;
  }
}

//Person class
//SETTERS AND GETTERS
/**
 * Represents a person.
 */
class Person2 {
  /**
   * Initializes a new instance of the Person2 class with the provided full name and birth year.
   * @param {string} fullName - The full name of the person.
   * @param {number} birthYear - The birth year of the person.
   */
  constructor(fullName, birthYear) {
    this._fullName = fullName;
    this.birthYear = birthYear;
  }

  /**
   * Sets the full name of the person.
   * @param {string} name - The full name of the person.
   */
  set fullName(name) {
    if (name.includes(' ')) {
      this._fullName = name;
    } else {
      alert('Not a full name');
    }
  }

  /**
   * Retrieves the full name of the person.
   * @returns {string} The full name of the person.
   */
  get fullName() {
    return this._fullName;
  }
}

const houssam = new Person2('houssam chakir', 1999);
console.dir(houssam)
houssam.fullName = 'sara chakir'

//OBJECT CREATE
const Person3 = {
  init(fN, bY) {
      this.fullName = fN;
      this.birthYear = bY;
  },

  calcAge() {
      return 2024 - this.birthYear
  },
}

const me3 = Object.create(Person3)
console.log(me3)
// me3.init('houssam', 1999)
// console.log(me3, me3.calcAge())
