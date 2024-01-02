let arr = ["a", "b", "c", "d", "e"];
let arr2 = ["e", "f", "g", "h", "i"];

// slice creats a mutated copy of array
console.log(arr.slice(1, 4)); // from b to d

// splice does the same but mutates original array

console.log(arr.splice(1, 4)); //! from b to e
// second argument is for how many elements to take

console.log(arr.reverse()); // [ 'e', 'd', 'c', 'b', 'a' ]

console.log(arr.concat(arr2)); // ['a', 'b', 'c', 'd', 'e', 'e', 'f', 'g', 'h', 'i']
console.log([...arr, ...arr2]); // also gives similar result without mutating original array

console.log(arr.join('-')) //a-b-c-d-e

//filling an array

const x = new Array(7); // creates an empty array of 7 elements
 x.fill(1, 3, 5); // it will fill it with ones starting from index 3 to 5

//Array.from()
const y = Array.from({length: 7}, () => {})

//example ///////////
// Array-like object representing temperatures in Celsius
const temperaturesCelsius = { length: 3, 0: 20, 1: 25, 2: 30 };

// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

// Using Array.from with mapFunction and thisArg
const temperaturesFahrenheit = Array.from(temperaturesCelsius, function (celsius) {
  return celsiusToFahrenheit(celsius);
}, this);

console.log(temperaturesFahrenheit);
// Outputs: [68, 77, 86]
