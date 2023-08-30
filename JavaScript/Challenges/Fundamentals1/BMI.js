let Mark = {
    weight: 78,
    height: 1.69,
}

let John = {
    weight: 92,
    height: 1.95,
} 
const markBMI = Mark.weight / Mark.height ** 2;
const johnBMI = John.weight / John.height ** 2;
const markHigherBMI = markBMI > johnBMI;

console.log(markBMI);
console.log(johnBMI);
console.log(markHigherBMI);

Mark.weight = 95, Mark.height = 1.88;
John.weight = 85, John.height = 1.76;

const updatedMarkBMI = Mark.weight / Mark.height ** 2;
const updatedJohnBMI = John.weight / John.height ** 2;
const updatedMarkHigherBMI = updatedMarkBMI > updatedJohnBMI;

console.log(updatedMarkBMI);
console.log(updatedJohnBMI);
console.log(updatedMarkHigherBMI);


