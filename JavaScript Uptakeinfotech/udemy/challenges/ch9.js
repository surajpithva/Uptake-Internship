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
