//: Arithmatic operators
const firstName = "Houssam";
const lastName = "Chakir";

const fullName = firstName + " " + lastName;
//should equal Houssam Chakir

//? typeof operator to get the type of a value
typeof fullName; //string

//: Equality operators
//* === and ==
//? == does type coercion unlike ===

console.log("18" == 18); //output: true
console.log(18 === 18); //output: true. it will be false if not the same type

//: Boolean logic operators
//* AND, OR, and NOT(!)
//? if(A and !B) do something;

//? //////////////////////////////////////////////////////////////////////
//! [ SPREAD OPERATOR (...) ] ////////////////////////////////////////////
//? //////////////////////////////////////////////////////////////////////

//- ARRAYS /////////////////////////////////////
const arr4 = [7, 8, 9, 10];

// the bad way of doing it
const badWayArr = [1, 2, 3, arr4[0], arr4[1], arr4[2], arr4[3]];
// the good wat of doing it
const goodWayArr = [1, 2, 3, ...arr4]; //OUTPUT: [1, 2, 3, 7, 8, 9, 10]
// in console log
console.log(...arr4); //OUTPUT: 7 8 9 10 instead of [7, 8, 9, 10]

//- STRINGS ////////////////////////////////////
const str = "Houssam";

const arr = [...str, " ", "."]; //CL OUTPUT: ['H', 'o', 'u', 's', 's', 'a', 'm', ' ', '.']
console.log(...str); //OUTPUT: H o u s s a m

//- FUNCTIONS //////////////////////////////////

function clothsCart(item1, item2, item3) {
  console.log(`your cart has ${item1}, ${item2}, and ${item3}`);
}

const choice = [
  prompt("what do you want to add to cart?"),
  prompt("second item"),
  prompt("third item"),
];
// calling function and using spread op
clothsCart(...choice); // OUTPUT: your cart has A, B, and C

//- OBJECTS ////////////////////////////////////
const obj = {
  prop1: "hello",
  prop2: "world",
};

const objCopy = {
  ...obj,
  prop3: "!",
  prop4: 4,
  prop5: 5,
};

console.log(objCopy); // { prop1: 'hello', prop2: 'world', prop3: '!', prop4: 4, prop5: 5,}

//: REST PATTERN AND PARAMETERS //////////////////////////////////////////////////

//? SPREAD, because on the RIGHT side of =
const arr5 = [1, 2, ...[3, 4]];

//? REST, because on the LEFT side of =
//! must be the only and last element
const [a, b, ...others] = [1, 2, 3, 4, 5];

console.log(a, b, others); // 1 2 [3, 4, 5]

//- FUNCTIONS //////////////////////////////////////

const add = (...nums) => {
    console.log(nums);
};

add(1,2); // [1, 2]
add(1, 2, 3, 4, 5); // [1, 2, 3, 4, 5]