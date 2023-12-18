const arr = [200, -344, 9000, -1200, 449];

for (const i of arr) {
  if (i > 0) {
    console.log(`you deposited ${i}`);
  } else {
    console.log(`you withdrew ${Math.abs(i)}`);
  }
}
console.log("------forEach---------");

arr.forEach(function (i) {
  if (i > 0) {
    console.log(`you deposited ${i}`);
  } else {
    console.log(`you withdrew ${Math.abs(i)}`);
  }
});

//getting index of iterrated elements

for (const [i, m] of arr.entries()) {
  if (m > 0) {
    console.log(`movement n°${i + 1}: you deposited ${m}`);
  } else {
    console.log(`movement n°${i + 1}: you withdrew ${Math.abs(m)}`);
  }
}
console.log("---------------");

//can have three params: element, index and the entire array
arr.forEach(function (element, index, array) {
  if (element > 0) {
    console.log(`movement n${index + 1}: you deposited ${element}`);
  } else {
    console.log(`movement n${index + 1}: you withdrew ${Math.abs(element)}`);
  }
});

//* break and continue methods dont work in a forEach method

//----------- forEach with a MAP
const currencies = new Map([
  ["USD", "United States Dollar"],
  ["EUR", "Euro"],
  ["MAD", "Moroccain Dirham"],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

//----------- forEach with a SET

const uniqueCurr = new Set(['USD','MAD', 'EUR', 'USD']);

// the _ is a throwaway variable
uniqueCurr.forEach(function(value, _, set) {
    console.log(`${_}: ${value}`)
})
