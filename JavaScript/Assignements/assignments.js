const country = "Morocco";
const continent = "Africa";
let population = 37000000;

console.log(country);
console.log(continent);
console.log(population);

// 

const isIland = false;
let language;

console.log(typeof isIland);
console.log(typeof country);
console.log(typeof continent);
console.log(typeof population);

// 

language = "arabic";

const countryHalf = population / 2;
population++;

const discription = `${country} is in ${continent}, and its ${population} people speak ${language}.`

const average = 33000000;
if(population > average) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(`${country}'s population is ${ average - population} below average.`);
}

// 

let numNeighbours = Number(prompt("How many neighbour countries does your country have?"));

if(numNeighbours === 1) {
    console.log(`Only 1 border`);
} else if(numNeighbours > 1) {
    console.log(`More than 1 border`);
} else {
    console.log(`No borders`);
}

if(language === "English" && population < 50000000 && isIland === false) {
    console.log(`you should live in ${country} :)`);
} else {
    console.log(`${country} is not the right country for you`);
}

// 

switch (language) {
    case "chinese":
    case "mandarin":
        console.log(`2nd place in number of native speakers`);
        break;
    case "english":
        console.log(`3rd place`);
        break;
    case "hindi":
        console.log(`Number 4`);
        break;
    case "arabic":
        console.log(`5th most spoken language`);
        break;
    default:
        console.log(`Great language too :D`);
}

// 

const isAboveAverage = population > 33000000 ? (`${country}'s population is above average`) : (`${country}'s population is below average`);
console.log(isAboveAverage);

//- A better approach to keep in mind for future code
console.log(`${country}'s population is ${population > 33000000 ? ("above") : ("below")} average`);

// FUNCTIONS
// FUNCTION DECLARATION
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital is ${capitalCity}`;
}

console.log(describeCountry("Morocco", 36, "Rabat"));
// FUNCTION EXPRESSION
const describeCountry2 = function (country, population, capitalCity) {
    return `${country} has ${population} million people and its capital is ${capitalCity}`;
}

console.log(describeCountry2("Morocco", 36, "Rabat"));
// 
const percentageOfTheWorld = function (population) {
    return population / 7900 * 100
}

console.log(percentageOfTheWorld(1441));
// ARROW FUNCTIONS

const percentageOfTheWorldArrow = (population) => population / 7900 * 100;

// Calling other functions
const describePopulation = (country, population) => {
    console.log(`${country} has ${population} people, which is about ${percentageOfTheWorldArrow(population)}% of the world`);
}

// Basic Aray Operaions (Methods)
const neighbours = ["Algeria", "Mouritania", "Spain"];

neighbours.push("Utopia");
neighbours.pop();
if(!neighbours.includes("Germany")) (console.log("Probably not a central European country :D"))
neighbours[2] = "Pain";

console.log(neighbours);

// Introduction to Obejects
const myCountry = {
    country: "Morocoo",
    capital: "Rabat",
    language: "Arabic",
    population: 37,
    neighbours: ["Algeria", "Mouritania", "Spain"]
}

// Dot vs Bracket Notation
console.log(`${myCountry.country} has ${myCountry.population} million arabic speaking people, ${myCountry.neighbours.length} countries and a capital called ${myCountry.capital}.`);

myCountry.population += 2;
myCountry["population"] -= 2;
