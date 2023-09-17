"use strict";

//- VARIABLES ///////////////////////////////

// PLAYERS
const players = document.querySelectorAll(".player");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");

let currentPlayer = player0;
// BTNS
const newBtn = document.querySelector(".btn--new");
const rollBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");
// SCORE
const score0 = document.querySelector("#score--0");
const score1 = document.querySelector("#score--1");
const currentScore0 = document.querySelector("#current--0");
const currentScore1 = document.querySelector("#current--1");

let currentValue = 0;
let scoreValue0 = 0;
let scoreValue1 = 0;
// DICE
const dice = document.querySelector(".dice");

//- FUNCTIONS ////////////////////////////////

const switchPlayer = () => {
  // Switches player
  if (currentPlayer === player0) {
    player0.classList.remove("player--active");
    player1.classList.add("player--active");
    currentPlayer = player1;
    currentValue = 0;
  } else if (currentPlayer === player1) {
    player1.classList.remove("player--active");
    player0.classList.add("player--active");
    currentPlayer = player0;
    currentValue = 0;
  }
};

//- EVENT LISTENERS //////////////////////////

//: DICE ROLLER -------------------------------
rollBtn.addEventListener("click", function () {
  // Rolls the dice
  let randNum = Math.floor(Math.random() * 5) + 1;
  dice.src = `images/dice-${randNum}.png`;
  if (dice.classList.contains("hidden")) dice.classList.remove("hidden");
  // if not 1 ? adds to current : resets current and switch player
  if (randNum !== 1) {
    // if not 1
    currentValue += randNum;
    currentPlayer === player0
      ? (currentScore0.textContent = currentValue)
      : (currentScore1.textContent = currentValue);
  } else {
    // if 1
    currentValue = 0;
    currentPlayer === player0
      ? (currentScore0.textContent = 0)
      : (currentScore1.textContent = 0);
    switchPlayer();
  }
});

//: HOLD CURRENT ----------------------------
holdBtn.addEventListener("click", function () {
  // sends current poits to current player
  if (currentPlayer === player0) {
    // if player 0
    scoreValue0 = currentValue;
    score0.textContent = Number(score0.textContent) + scoreValue0;
    currentValue = 0;
    currentScore0.textContent = 0;
    switchPlayer();
  } else if (currentPlayer === player1) {
    // if player 1
    scoreValue1 = currentValue;
    score1.textContent = Number(score1.textContent) + scoreValue1;
    currentValue = 0;
    currentScore1.textContent = 0;
    switchPlayer();
  }
});

//: NEW GAME -------------------------------
newBtn.addEventListener("click", function () {
  currentValue = 0;
  scoreValue0 = 0;
  scoreValue1 = 0;
  score0.textContent = 0;
  score1.textContent = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
});
