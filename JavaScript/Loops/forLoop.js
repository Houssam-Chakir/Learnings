//: FOR LOOP ///////////////////////

for(let rep = 1; rep <= 10; rep++) {
    console.log(`rep number ${rep} 🏋️`);
}

const array = [1, 2, 3, 4, 5];

for(let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

//: CONTINUE //////////////////////
//- continues to the next ITERATION

const array2 = [1, 2, 3, 4, 5];

for(let i = 0; i < array.length; i++) {
    if(array[i] !== 5) continue;
    console.log(array[i]);
} // prints only 5

//: BREAK /////////////////////////
//- breaks the current loop when condition is met

const array3 = [1, 2, 3, 4, 5];

for(let i = 0; i < array.length; i++) {
    if(array[i] === 3) break;
    console.log(array[i]);
} // prints 1 2 then breaks
