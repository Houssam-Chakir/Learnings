"use strict";

const printForcast = (array) => {
  let string = "";
  for (let i = 0; i < array.length; i++) {
    string += ` ...${array[i]}°C in ${i + 1} days`;
  }
  console.log(string);
};

const temps = [12, 5, -5, 0, 4];
printForcast(temps);
