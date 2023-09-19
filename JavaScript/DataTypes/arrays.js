//: ARRAYS ////////////////////////////////////
bikeBrands = ["yamaha", "suzuki", "honda", "aprillia"];

//* OTHER WAYS TO INIT AN ARRAY ///////////////

bikeBrands2 = new Array("Kawazaki", "Honda", "Ducati", "Zontes", "Voge");
console.log(bikeBrands2[2]); // Ducati
console.log(bikeBrands2.lenght);

//! ARRAYS can be mutated or changed even with CONST
//! u can change the values but cant change the whole array at once

const brand = "Sym"
myBike = new Array(brand, "NHT", 200, "ADV MINI TRAIL");

//- BASIC ARRAY OPERATIONS ///////////////////

//* Add elements ---------------------

myBike.push("element"); // appends elements to the end of the array
// it can also return the lenght of an array:
console.log(myBike.push("element")); //lenght of array 

myBike.unshift("first"); // appends element to the beginning of the array

//* Remove elements ------------------

myBike.pop(); // removes the last elements
console.log(myBike.pop()); // returns the removed element

myBike.shift(); // removes the first element

//* ----------------------------------

// element index
myBike.indexOf("element");

// checks if element is in array (true or false)
myBike.includes("element");