'use strict';

let newgameBtn = document.querySelector('.controls__newgame');

let figureDice = document.querySelector('.figure__dice');
let player1Area = document.querySelector('.player1area');
let player2Area = document.querySelector('.player2area');
let currentScore = 0;
let activePlayer = 0;

let rollDiceBtn = document.querySelector('.controls__rolldice');
let holdBtn = document.querySelector('.controls__hold');


//Rolling Dice Functionality
rollDiceBtn.addEventListener("click", function () {
    //Generating random dice roll
    let dice = Math.trunc(Math.random() * 6) + 1;

    //Display dice
    figureDice.classList.remove('hidden');
    figureDice.src = `./img/dice-${dice}.png`;

    //Check if 1 and change turn
    if (dice != 1) {
        currentScore += dice;
        document.querySelector(`.player${activePlayer + 1}area__currentscore`).textContent = currentScore;
    }
    else {
        currentScore = 0;
        document.querySelector(`.player${activePlayer + 1}area__currentscore`).textContent = currentScore;
        activePlayer = activePlayer === 0 ? 1 : 0;
        player1Area.classList.toggle('player-active');
        player2Area.classList.toggle('player-active');
    }
})
