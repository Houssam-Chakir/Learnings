//- OBJECTS ///////////////////////

const houssam = {
  name: "Houssam",
  year: 1999,
  calcAge: function () {
    console.log(this); // it will refere to the parent object which is houssam
    return 2023 - this.year; //! this refers to the Object which is houssam in this case.
  },
};
houssam.calcAge(); // 24

//- IN THE GLOBAL SCOPE //////////

console.log(this); // points to Window object

//- IN A FUNCTION ////////////////

//: Expression -------
const calcAge = function (birthYear) {
  console.log(2023 - birthYear);
  console.log(this);
};
calcAge(1999); // this is undifined //? only in strict mode, in slopy mode it will refere to the Window object
//* this is because the function doesnt have an owner which is what this would refere to, just like the top example
//* where it referes to the Object houssam hh

//: Arrow -------------
const calcAgeArrow = () => {
  console.log(2023 - birthYear);
  console.log(this);
};
calcAgeArrow(1999); // this refres to Window object
//* since arrow doesnt get its onw this so it uses the this keywork of parent function or parent scope
//*

//TODO // WHEN TO USE OR AVOID REGULAR AND ARROW FUNCTIONS //////////////

var firstName = "Matilda";

const houssam2 = {
  name: "Houssam",
  year: 1999,
  // using an arrow function
  greet: () => {
    console.log(`Hey ${this.name}`); //this = Window object in this case
  },

  greetExpression: function () {
    console.log(`Hey ${this.name}`); //this = houssam2
  },

  greetMatilda: () => {
    console.log(this.firstName);
  },
};

houssam2.greet(); //: Output: Hey undifined
//- because this in this case is taking from the global scope
//- the object is not considered a code block so it is not the parent, its the window object in this case

houssam2.greetExpression(); //: Output: Hey Houssam
//- generates a this keyword - takes parent which is houssam2 object

houssam2.greetMatilda(); //: Output: Matilda
