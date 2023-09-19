//- VARIABLES //////////////////////////

console.log(myName); // ReferenceError: Cannot access 'myName' before initialization
console.log(job); // ReferenceError: Cannot access 'job' before initialization
console.log(age); // undefined

let myName = "Houssam"; //? put in TDZ until declared
const job = "Moderator"; //? put in TDZ until declared
var age = 23 //? Hoisted but with undifined

//- FUNCTIONS //////////////////////////

console.log(add(1, 2)); // no errors - runs perffectly
console.log(addArrow()); // ReferenceError: Cannot access 'addArrow' before initialization

function add(a, b) {
    console.log("I can be called before my declaration :D");
    return a + b;
};

const addArrow = () => {
    console.log("You ll never get to read this in console >:)");
};