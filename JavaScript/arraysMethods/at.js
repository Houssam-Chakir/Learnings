let arr = [22, 45, 73, 13];

console.log(arr[0]); //same as
console.log(arr.at(0));

//gtting last element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
// vs
console.log(arr.at(-1));

//* works also on STRINGS
