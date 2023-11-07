const smgs = ["MP5", "MP7", "P90"];

for (const gun of smgs) console.log(gun); //prints each gun

//a way to get the index aswell
for (const gun of smgs.entries()) {
  console.log(gun); // something like: [0, "MP5"]
}
// destructuring  since gun is an array now
for (const [index, gun] of smgs.entries()) {
    console.log(`${index + 1}: ${gun}. [🛒 add to cart]`);
}

// looping over objects
