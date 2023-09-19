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
