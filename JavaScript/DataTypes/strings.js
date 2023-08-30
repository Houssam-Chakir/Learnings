//* Template Literals

const firstName = "Houssam";
const age = 24;
const language = "JavaScript";

const response = `Hello World. I am ${firstName}, a ${age} years old and learning ${language}.`;
console.log(response); //Hello World. I am Houssam, a 24 years old and learning JavaScript.

//* Multiple lines string
//? with Template literals

const multiLines = `Hello World.
I am ${firstName}
A ${age} years old and learning ${language}.`;

console.log(multiLines);
/**
 * Output:
 * Hello World.
 * I am Houssam
 * A 24 years old and learning JavaScript.
 */