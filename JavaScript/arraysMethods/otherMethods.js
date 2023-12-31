array.some(item => item > 0) //if atleast 1 is true
array.every(item => item > 0) // all must be true

[1, [2, [3, 4]]].flat(2) // argument to go levels deep
[1, [2, [3, 4]]].flatMap(item => item > 0) //can only go 1 level deep
