const dogs = [
  { weight: 22, currFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, currFood: 200, owners: ["Matilda"] },
  { weight: 13, currFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, currFood: 340, owners: ["Michael"] },
];

//weight ** 0.75 * 28
dogs.map((dog) => {
  dog.recFood = dog.weight ** 0.75 * 28;
});

//current > (rec * 0.90) && current <   (rec * 1.10)
//find sarahs dog and check portion
console.log(dogs);
console.log("----");
const sarah = dogs.find((dog) => dog.owners.includes("Sarah"));


if (
  sarah.currFood > sarah.recFood * 0.9 &&
  sarah.currFood < sarah.recFood * 1.1
) {
  console.log("within rec portion");
} else {
  console.log("out of rec portion");
}

const badEaters = dogs.reduce(
  (acc, dog) => {
    if (dog.currFood > dog.recFood * 0.9) acc.tooLittle.push(dog.owners);
    if (dog.currFood < dog.recFood * 1.1) acc.tooMuch.push(dog.owners);
    return acc;
  },
  { tooMuch: [], tooLittle: [] }
);

console.log(badEaters);

console.log(
  dogs.some(
    (dog) =>
      dog.currFood === dog.recFood
  )
);

const healty = dogs.reduce((acc, dog) => {
  if (dog.currFood > dog.recFood * 0.9 && dog.currFood < dog.recFood * 1.1)
    acc.push(dog);
  return acc;
}, []);

console.log(healty);

const portionAsc = dogs.sort((dog1, dog2) => dog1.recFood - dog2.recFood);

console.log('portionAsc', portionAsc)
