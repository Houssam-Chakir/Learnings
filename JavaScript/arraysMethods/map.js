const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroToUsd = 1.1;

const movementsUSD = movements.map((mov, i, a) => mov * euroToUsd);
console.log(movementsUSD)
