"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroToUsd = 1.1;

const movementsUSD = movements.map((mov) => mov * euroToUsd);
console.log(movementsUSD);

const deposits = movements.filter(function (mov) {
  return mov > 0;
});

const withdrawl = movements.filter(function (mov) {
  return mov < 0;
});

const displayMovements = function (movements) {
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const element = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i} ${type}</div>
        <div class="movements__date">3 days ago</div>
      <div class="movements__value">${mov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML("afterbegin", element);
  });
};

const displayCalcBalance = function (movements) {
  const balance = movements.reduce(function (total, mov) {
    return total + mov;
  }, 0);
  labelBalance.textContent = `${balance} €`;
};

const displayCalcSammury = function (movements) {
  const income = movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${income}`;

  const outcome = movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${outcome}`;
  console.log(income, outcome);
};

const userNameGenerator = function (accounts) {
  accounts.forEach(function (account) {
    account.username = account.owner
      .split(" ")
      .map((word) => word.at(0).toLowerCase())
      .join("");
  });
};

console.log(userNameGenerator(accounts));
console.log(accounts);

// Event handlers
let currentaccount;

const displayPageInfo = function () {
  displayMovements(currentaccount.movements);
  displayCalcBalance(currentaccount.movements);
  displayCalcSammury(currentaccount.movements);
};

btnLogin.addEventListener("click", function (event) {
  event.preventDefault();

  currentaccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );

  if (currentaccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome back, ${currentaccount.owner}`;

    containerApp.style.opacity = "100";

    displayPageInfo();

    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();
  }
});

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const targetacc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );

  //check if target user exists
  //amount more than 0

  if (targetacc && amount > 0) {
    //add negative movement to current account
    currentaccount.movements.push(amount * -1);
    //transfer amount
    targetacc.movements.push(amount);

    displayPageInfo();
  } else {
    console.log("error");
  }
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    currentaccount.username === inputCloseUsername.value &&
    currentaccount.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentaccount.username
    );
    console.log(index);
    accounts.splice(index, 1);
    containerApp.style.opacity = "0";
  }
});

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);
  const condition = currentaccount.movements.some((mov) => mov > amount * 0.1);

  if (amount > 0 && condition)
    currentaccount.movements.push(amount) && displayPageInfo();
});
// converstion

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////
