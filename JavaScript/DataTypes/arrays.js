//: ARRAYS ////////////////////////////////////
bikeBrands = ["yamaha", "suzuki", "honda", "aprillia"];

//* OTHER WAYS TO INIT AN ARRAY ///////////////

bikeBrands2 = new Array("Kawazaki", "Honda", "Ducati", "Zontes", "Voge");
console.log(bikeBrands2[2]); // Ducati
console.log(bikeBrands2.lenght);

//! ARRAYS can be mutated or changed even with CONST
//! u can change the values but cant change the whole array at once

const brand = "Sym";
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

//: [ DESTRUCTURING ARRAYS ] /////////////////////////////////////////////////

const arr = [1, 2, 3];
// destructuring //? doesnt effect the original array
let [x, y, z] = arr;
// Printing
console.log(x, y, z); // output: 1 2 3

/////

const guns = {
  rifles: ["M4", ["AK-47", "AK-74"], "AUG"],
  smgs: ["MP5", "MP7", "P90"],
  machineGuns: ["SAW", "PKM"],

  buy: function (rifle, type, smg, machineGun) {
    return [
      this.rifles[rifle][type],
      this.smgs[smg],
      this.machineGuns[machineGun],
    ];
  },
};
[];
let [firstSmg, secondSmg2] = guns.smgs; // smg1 = MP5, smg2 = MP7

[secondSmg2, firstSmg] = [firstSmg, secondSmg2]; // switchs values

console.log(firstSmg, secondSmg2);

//: buying guns using destructuring -------------------
const [myRifle, mySMG, myMachineGun] = guns.buy(1, 1, 0, 0);
//checking my guns
console.log(myRifle, mySMG, myMachineGun); //output: AK-74 MP5 SAW

/// Nested destructuring

const arr2 = [4, 5, [6, 7]];
let [a, , [b, c]] = arr2; // a = 4, b = 6, c = 7

// Default value

const arr3 = [4, 5, [6, 7]];
let [g = 1, , [h = 1, j = 1], k = 1] = arr2; // g = 4, h = 6, j = 7, k = 1

