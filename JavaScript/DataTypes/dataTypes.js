//* Values can either Objects or Primitive

//- Objects like:
let me = {
    name: 'Houssam',
    age: 24,
}

//- Primitive like:
let firstName = 'Houssam';
let myAge = 24;

/**
 * : So there are seven primitive data types:
 * ? number, string, bullion, undefined, null, symbol and big int.
 * 
 * ? -Numbers: are one type for integers and floats unlike other languages.
 * ? -Undifined: is the value taken by a variable with no assigned value.
 * ? -Null: the same but used in different situations.
 * ? -Symbols: a unique value that cannot be changed.
 * ? -Bigint: a large number that cant be presented as numbers due to its size.
*/

//* Dynamic typing: feature that allows JS to determine the type of a stored value automatically.

//----------------------------------------------------------------------------------------------

//- Data Types Conversion AND Coercion
//: TYPE CONVERSION: done manually by us to converte from type to type

const birthYear = '1999';
console.log(birthYear + 18); //output: 199918
//converting string to number
Number(birthYear);
console.log(2023 - birthYear); //output: 24

//converting string that doesnt contain numbers
console.log(number('Houssam')); //output: NaN (Not a Number)
//? you can also convert to a string or a bolean

//: TYPE COERCION: done automatically by JavaScript