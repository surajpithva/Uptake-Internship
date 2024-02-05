const game = {
  team1: "Bayern Munich",
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
    team1: 3,
    x: 3.25,
    team2: 2,
  },
};

// 1. Create one player array for each team (variables 'players1' and 'players2')
const [players1, players2] = game.players;
//console.log(players1, players2);

//2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3. Create an array 'allPlayers' containing all players of both teams (22 players)

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a  new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'

const players1Final = ["Thiago", "Coutinho", "Perisic", ...players1];
console.log(players1Final);

// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')

const {
  odds: { team1, x: draw, team2 },
} = game;
//console.log(team1);

// 6.  Write a function ('printGoals') that receives an arbitrary number of player  names (not an array) and prints each of them to the console, along with the  number of goals that were scored in total (number of player names passed in)

const printGoals = function (...players) {
  console.log(players);
  //   console.log(`${players.length} were are scored`);
};
// printGoals("Davies", "Kimmich", "Goretzka", "Coman");
// printGoals("Hakimi", "Weigl", "Witsel");

//
printGoals(...game.scored);

//7. The team with the lower odd is more likely to win. Print to the console which  team is more likely to win, without using an if/else statement or the ternary  operator.

// both answer are valid

// const winteam =
//   (game.odds.team1 < game.odds.team2 &&
//     `${game.team1} is more likely to win`) ||
//   `${game.team2} is more likely to win`;
// console.log(winteam);

team1 < team2 && console.log("team 1 more likely to win");
team1 > team2 && console.log("team 2 more likely to win");

// 8. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")

// for (const [key, { open, close }] of Allthree) {
//   console.log(`on ${key} we open at ${open} and close at ${close}`);
// }

const val = Object.values(game.scored);
for (const item of val.entries()) {
  console.log(`Goal ${item[0] + 1}: ${item[1]}`);
}

// 9. Use a loop to calculate the average odd and log it to the console We alreadY studied how to calculate averages, you can go check if you don't remember)

const odds = Object.values(game.odds);
let avg = 0;
for (const odd of Object.values(game.odds)) avg = avg + odd;
avg = avg / odds.length;
console.log(avg);

// let sum = 0;
// for (let i = 0; i < calcAvg.length; i++) {
//   sum += calcAvg[i];
// }
// console.log(sum / 3);

//10.Print the 3 odds to the console, but in a nice formatted way, exactly like this: Odd of victory Bayern Munich: 1.33 Odd of draw: 3.25
//  Odd of victory Borrussia Dortmund: 6.5 Get the team names directly from the game object, don't hardcode them
//  (except for "draw"). Hint: Note how the odds and the game objects have the same property names

for (const [team, odds] of Object.entries(game.odds)) {
  const teamstr = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`odd of ${teamstr} ${odds}`);
}

// Bonus:- Create an object called 'scorers' which contains the names of the  players who scored as properties, and the number of goals as the value. In this

const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);

const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🔶 Yellow card"],
]);

//11. Create an array 'events' of the different game events that happened (no duplicates)

const events = [...new Set(gameEvents.values())];
console.log(events);

// const events = ["Goal", "Substitution", "Yellow card", "Red card"];
// console.log(events);

//12. After the game has finished, is was found that the yellow card from minute 64 was unfair.So remove this event from the game events log.
gameEvents.delete(64);
console.log(gameEvents);

// 13.Compute and log the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)

console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

// 14.Loop over 'gameEvents' and log each element to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this: [FIRST HALF] 17: ⚽GOOD LUCK � � GOAL

//this is use of if else condition we also use ternory operator

// for (const [key, value] of gameEvents) {
//   if (key <= 45) {
//     console.log(`[FIRST HALF:] ${key} ${value}`);
//   } else {
//     console.log(`[SECOND HALF:] ${key} ${value}`);
//   }
// }

//ternory operator

for (const [game, events] of gameEvents) {
  const half = game <= 45 ? "FIRST" : "SECOND";
  console.log(`[${half} HALF] ${game} ${events}`);
}
