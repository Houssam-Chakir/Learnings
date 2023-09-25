const game = {
  team1: "Bayren Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1
let [players1, players2] = game.players;
//2
[gk, ...fieldPlayers] = players1;
console.table(gk, fieldPlayers);
//3
let allPlayers = [...players1, ...players2];
console.table(allPlayers);
//4
let players1Final = [gk, ...fieldPlayers, "Thiago", "Coutinho", "Perisic"];
console.table(players1Final);
//5
let {team1, x: draw, team2} = game.odds;
console.log(team1, draw, team2);
//6
//7
team1 < team2 && console.log("team1 wins");
team1 > team2 && console.log("team2 wins");
