//: IF / ELSE STATEMENTS ///////////////
const age = 21;

if(age >= 18) {
    console.log(`${age} is old enough to take driving license exam.`);
} else {
    console.log(`Not old enough until after ${18 - age} years.`);
};

//- one line if statement
if(age === 21) console.log("cool");

//: SWITCH STATEMENTS /////////////////
//* good for comparing 1 value for multiple conditions

const day = "Monday";

switch (day) {
    case "Monday": // day === "Monday"
        console.log("time to get back to work :)");
        console.log("study after work");
        break; //! dont forget the break statement
    case "Tuesday":
        console.log("weekly meeting");
        break;
    case "Wednesday": // if its empty like this then both-
    case "Thursday": //! wednesday and thursday share the same block
        console.log("shifts and studies, the usual.");
        break;
    case "Friday":
        console.log("Al jamuaa");
        break;
    case "Saturday":
    case "Sunday":
        console.log("gonna be the same");
        console.log("my OFFs are scaterred in the week");
        break;
    default:
        console.log("bruh only earth days");
}

//: CONDITIONAL (TERNARY) OPERATOR ////////////////////////////

age = 24;
age >= 18 ? console.log(`I can drive a car`) : console.log(`I will settle with a bicycle :,)`);

//? OR store the value in a variable
const isOldEnough = age >= 18 ? "Can drive" : "Get a bicycle";
console.log(isOldEnough);

//- Ternary operator is considered an expression
//! so it can be used in template literals

console.log(`I can ${age >= 18 ? "can drive" : "get a bicycle"}`);