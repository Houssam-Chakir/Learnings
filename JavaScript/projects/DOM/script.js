"use strict";

// - VARIABLES //////////////////////////////////////
let randomNum = Math.floor(Math.random() * 20) + 1;
console.log(randomNum);

let score = Number(document.querySelector(".score").textContent);
let highScore = Number(document.querySelector(".highscore").textContent);
console.log(highScore);

//- FUNCTIONS //////////////////////////////////////
const resetScore = () => {
  document.querySelector(".score").textContent = 20;
  score = 20;
};

const resetHighScore = () => {
  document.querySelector(".highscore").textContent = 0;
  highScore = 0;
};

const randomizer = () => {
  randomNum = Math.floor(Math.random() * 10) + 1;
};

const reset = () => {
  randomizer();
  resetScore();
  resetHighScore();
  console.log(randomNum);
};

// - EVENT LISTENERS //////////////////////////////////////////////////
// TODO event listner to try again
// new randomNum / message to start guessing / score back to 20
document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".message").textContent = "Start guessing...";
  reset();
});

// TODO checks guess to decide after check click
// stores guess in var / checks randomNum === guess
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    //* checks if no number inputed
    document.querySelector(".message").textContent = "😒 a number please";
  } else if (randomNum === guess) {
    //* checks in random Num === guess
    // success message
    document.querySelector(".message").textContent = "🎉 Correct guess!!!";
    //resets random num
    randomizer();
    // checks high score ----
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore; // updaes DOM: new Highscore
    }
    resetScore();
  } else if (randomNum !== guess) {
    //* now checking if high OR low
    if (guess > randomNum) {
      //HIGH
      document.querySelector(".message").textContent = "A high guess ⬆️";
    } else {
      //LOW
      document.querySelector(".message").textContent = "A low guess ⬇️";
    }
    // updates score by score--
    score--;
    document.querySelector(".score").textContent = score;
    //check score if 0
    if (document.querySelector(".score").textContent <= 0) {
      document.querySelector(".message").textContent = "Lets try again :)";
      reset();
    }
  }
});
