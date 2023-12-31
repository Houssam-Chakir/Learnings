array.some(item => item > 0) //if atleast 1 is true
array.every(item => item > 0) // all must be true

[1, [2, [3, 4]]].flat(2) // argument to go levels deep
[1, [2, [3, 4]]].flatMap(item => item > 0) //can only go 1 level deep


// works only with strings or else converts numbers to strings
['houssam', 'alaa', 'sara'].sort();//mutates the original array, ABC sorting in this case

[5000, 3400, -150, -790, -3210, -1000, 8500, -30].sort((a, b) => {
  if (a > b) 1
  if (a < b) -1
}) // this to sort the array from small to big
// a better way
[5000, 3400, -150, -790, -3210, -1000, 8500, -30].sort((a, b) => a - b)
