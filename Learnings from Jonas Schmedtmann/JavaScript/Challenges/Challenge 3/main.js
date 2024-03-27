'use strict';

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
        'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

//CODING CHALLENGE 1
//Create One Player Array for each team
const [team1Players, team2Players] = game.players;
console.log(team1Players);
console.log(team2Players);

//Create seperate variable for GK and field players for Bayern Munich
const [team1GK, ...team1FieldPlayers] = team1Players;
console.log(team1GK, team1FieldPlayers);

//Create a array with all the team players
const allPlayers = [...team1Players, ...team2Players];
console.log(allPlayers);

//Add three new substitute players in order to have final players
const [...team1PlayersFinal] = [...team1Players, 'Thiago', 'Coutinho', 'Perisic'];
console.log(team1PlayersFinal);

//print the odds of game with variables
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

//printGoals that receives any number of players and displays the players as well as goals scored.
const printGoals = function (...noOfPlayers) {
    for (let i = 0; i < noOfPlayers.length; i++) {
        console.log(noOfPlayers[i]);
    }
    console.log(`Goals Scored: ${noOfPlayers.length}`);
}
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

//Print in console team most likely to win without using if/else or tertiary statements
console.log(`${team1 > team2 && game.team2 || game.team1} is more likely to win.`);


//CODING CHALLENGE 2
//Display each player with goals scored
for (const [key, value] of game.scored.entries()) {
    console.log(`Goal ${key + 1}: ${value}`);
}

//Display average odd
let sum = 0;
let odds = Object.entries(game.odds);

for (const [key, value] of odds) {
    sum += value;
}

const averageOdd = sum / odds.length;
console.log(averageOdd);

//Display odds of teams
for (const [key, value] of odds) {
    console.log(`Odds of ${game[key] ?? 'Draw'} : ${value}`);
}

//Bonus
// const scored = game.scored;
// console.log(scored);
// const scorers = {
//     [scored[0]]: scored.forEach(),
//     [scored[1]]: 2
// }
// console.log(scorers);

//CODING CHALLENGE 3

const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🟨 Yellow card'],
    [69, '🟥 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '🟨 Yellow card'],
]);

//Find unique events
const events = new Set(gameEvents.values());
console.log(events);

//Remove minute 64
gameEvents.delete(64);
console.log(gameEvents);

//Find average events time
const [...time] = gameEvents.keys();
let sumTime = 0;
let avgTimeArray = [];
for (let i = 0; i < time.length; i++) {
    if (time[i] < 90) {
        avgTimeArray[i] = time[i + 1] - time[i];
        sumTime += avgTimeArray[i];
    }
}
const avgTime = Math.round(sumTime / avgTimeArray.length);
console.log(`An event happened, on average every ${avgTime} minutes.`);

//Display events according to halves
for (let [key, value] of gameEvents) {
    if (key <= 45)
        console.log(`[FIRST HALF]${key} : ${value}`);
    else
        console.log(`[SECOND HALF]${key} : ${value}`);
}