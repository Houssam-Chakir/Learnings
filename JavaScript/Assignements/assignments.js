const country = "Morocco";
const continent = "Africa";
let population = 37000000;

console.log(country);
console.log(continent);
console.log(population);

const isIland = false;
let language;

console.log(typeof isIland);
console.log(typeof country);
console.log(typeof continent);
console.log(typeof population);

language = "Arabic";

const countryHalf = population / 2;
population++;

const discription = `${country} is in ${continent}, and its ${population} people speak ${language}.`

const average = 33000000;
if(population > average) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(`${country}'s population is ${ average - population} below average.`);
}

let numNeighbours = Number(prompt("How many neighbour countries does your country have?"));

if(numNeighbours === 1) {
    console.log(`Only 1 border`);
} else if(numNeighbours > 1) {
    console.log(`More than 1 border`);
} else {
    console.log(`No borders`);
}