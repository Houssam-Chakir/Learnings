"use strict";

// - VARIABLES //////////////////////////////////////
let randomNum = Math.floor(Math.random() * 20) + 1;
console.log(randomNum);

let score = Number(document.querySelector(".score").textContent);
let highScore = Number(document.querySelector(".highscore").textContent);
console.log(highScore);

const scoreSelector = document.querySelector(".score");
const highScoreSelector = document.querySelector(".highscore");
const messageSelector = document.querySelector(".message");
const numberSelector = document.querySelector(".number");
const bodySelector = document.querySelector("body");

//- FUNCTIONS //////////////////////////////////////
const resetScore = () => {
  scoreSelector.textContent = 20;
  score = 20;
};

const resetHighScore = () => {
  highScoreSelector.textContent = 0;
  highScore = 0;
};

const randomizer = () => {
  randomNum = Math.floor(Math.random() * 10) + 1;
};

const reset = (msg) => {
  messageSelector.textContent = msg;
  randomizer();
  resetScore();
  resetHighScore();
  console.log(randomNum);
  defaultEffect();
};

const winnerEffect = (guess) => {
  bodySelector.style.backgroundColor = "#60b347";
  numberSelector.textContent = guess;
};

const defaultEffect = () => {
  bodySelector.style.backgroundColor = "#222";
  numberSelector.textContent = "?";
};

// - EVENT LISTENERS //////////////////////////////////////////////////
// TODO event listner to try again -------------------------
// new randomNum / message to start guessing / score back to 20
document.querySelector(".again").addEventListener("click", function () {
  reset("Start guessing...");
});

// TODO checks guess to decide after check click -----------
// stores guess in var / checks randomNum === guess
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // when guess is not a number //
  if (!guess) {
    //* checks if no number inputed
    messageSelector.textContent = "😒 a number please";
  } else if (randomNum === guess) {
    // when guess is correct //
    winnerEffect(guess);
    // success message
    messageSelector.textContent = "🎉 Correct guess!!!";
    //resets random num
    randomizer();
    // when there is new high score
    if (score > highScore) {
      highScore = score;
      highScoreSelector.textContent = highScore; // updaes DOM: new Highscore
    }
    resetScore();
  } else if (randomNum !== guess) {
    // when guess is not correct //
    guess > randomNum
      ? (messageSelector.textContent = "A high guess ⬆️")
      : (messageSelector.textContent = "A low guess ⬇️");
    // updates score by score--
    score--;
    scoreSelector.textContent = score;
    //check score if 0
    if (scoreSelector.textContent <= 0) {
      reset("Lets try again :)");
    }
  }
});
