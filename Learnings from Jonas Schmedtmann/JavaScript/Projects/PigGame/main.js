'use strict';


let figureDice = document.querySelector('.figure__dice');
let player1Area = document.querySelector('.player1area');
let player2Area = document.querySelector('.player2area');
let currentScore = 0;
let activePlayer = 0;
let finalScore = [0, 0];
let playing = true;

let newgameBtn = document.querySelector('.controls__newgame');
let rollDiceBtn = document.querySelector('.controls__rolldice');
let holdBtn = document.querySelector('.controls__hold');

function changePlayer() {
    currentScore = 0;
    document.querySelector(`.player${activePlayer + 1}area__currentscore`).textContent = currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player1Area.classList.toggle('player-active');
    player2Area.classList.toggle('player-active');

}
//Rolling Dice Functionality
rollDiceBtn.addEventListener("click", function () {
    //Generating random dice roll
    if (playing) {
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
            changePlayer();
        }
    }
});

holdBtn.addEventListener("click", function () {
    if (playing) {
        finalScore[activePlayer] += currentScore;
        document.querySelector(`.player${activePlayer + 1}area__finalscore`).textContent = finalScore[activePlayer];

        if (finalScore[activePlayer] >= 20) {
            playing = false;
            document.querySelector(`.player${activePlayer + 1}area`).classList.add('winner');
            figureDice.classList.add('hidden');
        }
        else {
            changePlayer();
        }
    }
});

newgameBtn.addEventListener("click", function () {

    document.querySelector(`.player${activePlayer + 1}area`).classList.remove('winner');
    currentScore = 0;
    document.querySelector(`.player${activePlayer + 1}area__currentscore`).textContent = currentScore;
    finalScore = [0, 0];
    document.querySelector('.player1area__finalscore').textContent = finalScore[activePlayer];
    document.querySelector('.player2area__finalscore').textContent = finalScore[activePlayer];
    activePlayer = 0;
    player1Area.classList.add('player-active');
    player2Area.classList.remove('player-active');
    playing = true;

})