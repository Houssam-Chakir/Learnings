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
  defaultEffect();
};

const winnerEffect = (guess) => {
  document.querySelector("body").style.backgroundColor = "#60b347";
  document.querySelector(".number").textContent = guess;
};

const defaultEffect = () => {
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").textContent = "?";
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
  // when guess is not a number //
  if (!guess) {
    //* checks if no number inputed
    document.querySelector(".message").textContent = "😒 a number please";
  } else if (randomNum === guess) {
    // when guess is correct //
    winnerEffect(guess);
    // success message
    document.querySelector(".message").textContent = "🎉 Correct guess!!!";
    //resets random num
    randomizer();
    // when there is new high score
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore; // updaes DOM: new Highscore
    }
    resetScore();
  } else if (randomNum !== guess) {
    // when guess is not correct //
    if (guess > randomNum) {
      //when guess is HIGH
      document.querySelector(".message").textContent = "A high guess ⬆️";
    } else {
      //when guess is LOW
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
