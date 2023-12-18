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
