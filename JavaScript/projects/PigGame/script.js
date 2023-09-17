"use strict";

//- VARIABLES ///////////////////////////////

// PLAYERS
const players = document.querySelectorAll(".player");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
let currentPlayer = 0;
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
let scoreTotal = [0, 0];
// DICE
const dice = document.querySelector(".dice");
// STATUS
let playing = true;

//- FUNCTIONS ////////////////////////////////

const switchPlayer = () => {
  // Switches player
  document.querySelector(`#current--${currentPlayer}`).textContent = 0;

  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
  currentValue = 0;
  currentPlayer === 0 ? (currentPlayer = 1) : (currentPlayer = 0);
};

//- EVENT LISTENERS //////////////////////////

//: DICE ROLLER -------------------------------
rollBtn.addEventListener("click", function () {
  if (playing) {
    // Rolls the dice
    let randNum = Math.floor(Math.random() * 5) + 1;
    dice.src = `images/dice-${randNum}.png`;
    if (dice.classList.contains("hidden")) dice.classList.remove("hidden");

    // if not 1 ? adds to current : resets current and switch player
    if (randNum !== 1) {
      // if not 1
      currentValue += randNum;
      document.querySelector(`#current--${currentPlayer}`).textContent =
        currentValue;
    } else {
      // if 1
      document.querySelector(`#current--${currentPlayer}`).textContent = 0;
      currentValue = 0;
      switchPlayer();
    }
  }
});

//: HOLD CURRENT ----------------------------
holdBtn.addEventListener("click", function () {
  // sends current poits to current player
  if (playing) {
    let targetScore = document.querySelector(`#score--${currentPlayer}`);
    //
    scoreTotal[currentPlayer] += currentValue;
    targetScore.textContent = scoreTotal[currentPlayer];
    // 
    if (scoreTotal[currentPlayer] >= 20) {
      playing = false;
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.remove("player--active");
        dice.classList.add("hidden")
    } else {
      switchPlayer();
    }
  }
});

//: NEW GAME -------------------------------
newBtn.addEventListener("click", function () {
  playing = true;
  currentValue = 0;
  scoreTotal = [0, 0];
  score0.textContent = 0;
  score1.textContent = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;

  document
    .querySelector(`.player--${currentPlayer}`)
    .classList.remove("player--winner");
  document.querySelector(`.player--0`).classList.add("player--active");
  document.querySelector(`.player--1`).classList.remove("player--active");
});
