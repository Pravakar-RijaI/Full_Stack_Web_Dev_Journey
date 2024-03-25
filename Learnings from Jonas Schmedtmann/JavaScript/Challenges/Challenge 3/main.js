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

//Create One Player Array for each team
const [team1Players, team2Players] = game.players;
console.log(team1Players);
console.log(team2Players);

//Create seperate variable for GK and field players for Bayern Munich
const [team1GK, ...team1FieldPlayers] = team1Players;
console.log(team1GK, team1FieldPlayers);

//Create a array with all the team players
const [...allPlayers] = [...team1Players, ...team2Players];
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
printGoals(game.scored);

//Print in console team most likely to win without using if/else or tertiary statements

