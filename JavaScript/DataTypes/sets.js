//- SETS

//sets conayin only uniue values and no duplicates

const orderset = new Set(["pizza", "pasta", "rizoto", "pasta" , "pizza"]);
console.log(orderset); // Set(3) { 'pizza', 'pasta', 'rizoto' }

const firstName = new Set("Houssam");
console.log(firstName); // Set(6) { 'H', 'o', 'u', 's', 'a', 'm' }
// no double S

firstName.size; //6
firstName.has("s"); //true
firstName.add("."); // Set(7) { 'H', 'o', 'u', 's', 'a', 'm', '.' }
firstName.delete("."); // Set(7) { 'H', 'o', 'u', 's', 'a', 'm' }

