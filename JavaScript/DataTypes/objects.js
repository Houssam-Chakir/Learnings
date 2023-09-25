//: NEW data structer introduced: Objects
// Arrays
const houssamArray = [
  "Houssam",
  "Chakir",
  2023 - 1999,
  "Web Developer"[("JavaScript", "React", "NextJS", "ThreeJS")],
];
// Objects
const houssam = {
  firstName: "Houssam",
  lastName: "Chakir",
  age: 2023 - 1999,
  goal: "Web developer",
  futurLearnings: ["JavaScript", "React", "NextJS", "ThreeJS"],
};

houssam.firstName; // dot notation
houssam["firstName"]; // brackets notation
//? main difference is that the brackets notation can have expressions

const nameSTR = "Name";
houssam["first" + nameSTR]; // houssam["firstName"]
// also for variables
const goalKey = "goal";
houssam[goalKey]; //! houssam.goalkey wont work in this case, give undifined

// adding
houssam.bike = "NHT200";
houssam["bikeBrand"] = "SYM";

//: OBJECT METHODS ///////////////////////
//- adding functions as key value paire:
const info = {
  birthYear: 1999,
  age: function (birthYear) {
    return 2023 - birthYear;
  },
};

console.log(info.age(1999)); //24

//* now using brackets
console.log(info["age"](1999)); //- read the syntax carefully

//: USING "this" //////////////////////////

const info1 = {
  birthYear: 1999,
  age: function () {
    return 2023 - this.birthYear;
  },
};

console.log(info.age()); //24

//! A GOOD PRACTICE TO KEEP IN MIND /////////
//- Use the function once to store the calculated value in a new property

const info2 = {
  birthYear: 1999,
  calcAge: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
  },
};

console.log(info2.calcAge());
// now u dont have to call the function again
console.log(info2.age); // now u have age property with the calculated age

//* CHALLENGE ///
/* Write your code below. Good luck! 🙂 */

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

if (john.calcBMI() > mark.calcBMI()) {
  console.log(
    `${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${
      mark.fullName
    }'s (${mark.calcBMI()})!`
  );
} else {
  console.log(
    `${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${
      john.fullName
    }'s (${john.calcBMI()})!`
  );
}

//- [ DESTRUCTURING OBJECTS ] ////////////////////////////////////////////

const guns = {
  rifles: ["M4", ["AK-47", "AK-74"], "AUG"],
  smgs: ["MP5", "MP7", "P90"],
  machineGuns: ["SAW", "PKM"],

  orderDelivery: function ({ rifelIndex: i = 0, address = "unkown", quantity: q = 1 }) {
    console.log(
      `Order recieved! your ${q} ${this.rifles[i]} is/are being processed for delivery. `
    );
    console.log(`shipping address: ${address}`);
  },
};

//: object as param -------
guns.orderDelivery({
  rifelIndex: 0,
  address: "Casablanca",
  quantity: 3,
}); // OUTPUT: Order recieved! your 3 M4 is/are being processed for delivery. shipping address: Casablanca

// const {target: newName = "DefaultValue"} = object;
const {
  rifles: mediumRange = "empty",
  smgs: cqb = "empty",
  machineGuns: suppression = "empty",
} = guns;
//

console.log("Rifles: ", mediumRange, "Smgs: ", cqb, "MachineGuns", suppression);
// output: Rifles:  [ 'M4', [ 'AK-47', 'AK-74' ], 'AUG' ] Smgs:  [ 'MP5', 'MP7', 'P90' ] MachineGuns [ 'SAW', 'PKM' ]

//- Mutating variables -------
({ rifles: someGuns } = guns);
console.log("someGuns", someGuns);
