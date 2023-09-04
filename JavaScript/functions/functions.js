"use strict"

//: FUNCTION DECLARATION /////////////////////////////////////////
//?FUNCTIONS are values, so they can be sotred cause they return a value at the end.
//! DECLARATION can be called before they are declared like in this example:

console.log(foodProcessor(5,3));

function foodProcessor(apples, bananas) {
    const juice = `juice with ${apples} apples and ${bananas} bananas.`;
    console.log("juice is ready");
    return juice
}


//: FUNCTION EXPRESSION //////////////////////////////////// 
//* stored in a variable and created without a name

const ageCalc = function (birthYear) {
    return 2023 - birthYear;
}

//- Calling the function expression
const myAge = ageCalc(1999);
console.log(myAge);