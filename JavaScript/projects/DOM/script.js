"use strict";

// - VARIABLES //////////////////////////////////////
let randomNum = Math.floor(Math.random() * 10) + 1;
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
  document.querySelector(".message").textContent = "Start guessing...";
  console.log("again btn clicked!");
  console.log(randomNum);
};

// - EVENT LISTENERS //////////////////////////////////////////////////
// TODO event listner to try again
// new randomNum / message to start guessing / score back to 20
document.querySelector(".again").addEventListener("click", function () {
  reset();
});

// TODO checks guess to decide after check click
// stores guess in var / checks randomNum === guess
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // checks in random Num === guess ----------------
  if (randomNum === guess) {
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
    // try again msg
    document.querySelector(".message").textContent = "Try again :)";
    // updates score to score--
    score--;
    document.querySelector(".score").textContent = score;
    //check score if 0
    if (document.querySelector(".score").textContent <= 0) {
      // failed msg
      reset();
    }
  }
});
