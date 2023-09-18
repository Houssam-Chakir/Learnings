"use strict";

//: GLOBALE SCOPE //////////////////////////////////////////////////////
function calcAge(birthYear) {
  //- FUNCTION SCOPE ////////////////////////////////////
  const age = 2023 - birthYear;
  //- FUNCTION SCOPE II /////////////////////////
  function printAge() {
    const myAge = `you are ${age}, born in ${birthYear}`;
    console.log(myAge);

    //? BLOCK SCOPE ///////////////////
    if (birthYear >= 1981 && birthYear <= 1999) {
      const firstName = "Youness"; // scoping from here to global until found
      const str = `oh, you are a millenial, ${firstName}`;
      console.log(str);
      //
      var varVar = "I am outside the block :D";
      //! [ STRICT MODE ONLY ] FUNCTIONS are block scoped
      function add(a, b) {
        return a + b;
      }
      //! [ STRICT MODE ONLY ] //////////////////////////
      console.log(add(2, 3));
    }
    //? BLOCK SCOPE /////////////////
    // ! calling it outside will cause a reference error
    // add(1, 2); <=== cant be reached from the block
    console.log(varVar);
  }
  //- FUNCTION SCOPE II /////////////////////////
  printAge();
  return age;
  //- FUNCTION SCOPE ////////////////////////////////////
}

const firstName = "Houssam";
calcAge(1999);
//: GLOBALE SCOPE //////////////////////////////////////////////////////
