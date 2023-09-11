//: WHILE LOOP /////////////////////
let dice = Math.trunc(Math.random() * 6);

// will run until you roll 6
while (dice !== 6) {
    console.log("try again");
    dice = Math.trunc(Math.random() * 6);
}