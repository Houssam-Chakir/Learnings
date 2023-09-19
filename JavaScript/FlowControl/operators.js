//: Arithmatic operators
const firstName = 'Houssam';
const lastName = 'Chakir';

const fullName = firstName + ' ' + lastName;
//should equal Houssam Chakir 

//? typeof operator to get the type of a value
typeof fullName; //string

//: Equality operators 
//* === and ==
//? == does type coercion unlike ===

console.log('18' == 18); //output: true
console.log(18 === 18); //output: true. it will be false if not the same type

//: Boolean logic operators
//* AND, OR, and NOT(!)
//? if(A and !B) do something;