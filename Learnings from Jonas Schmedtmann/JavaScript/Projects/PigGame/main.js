'use strict';


let newgameBtn = document.querySelector('.controls__newgame');
let player1CurrentScore = document.querySelector('.player1area__currentscore');
let player2CurrentScore = document.querySelector('.player2area__currentscore');
let player1FinalScore = document.querySelector('.player1area__finalscore');
let player2FinalScore = document.querySelector('.player2area__finalscore');
let player1BgClr = document.querySelector('.player1area');
let player2BgClr = document.querySelector('.player2area');
let figureDice = document.querySelector('.figure__dice');
let player1CScore = 0;
let player2CScore = 0;
let player1FScore = 0;
let player2FScore = 0;

let rollDiceBtn = document.querySelector('.controls__rolldice');
let holdBtn = document.querySelector('.controls__hold');

newgameBtn.addEventListener("click", function () {
    player1CurrentScore.textContent = "0";
    player1FinalScore.textContent = "0";
    player2CurrentScore.textContent = "0";
    player2FinalScore.textContent = "0";
    figureDice.classList.add('hidden');
    player1CScore = 0;
    player2CScore = 0;
});

let turn = 1;
const player1Turn = function () {
    //pic display
    player1BgClr.style.backgroundColor = "rgba(245, 245, 245, 0.788)";
    let randomNumber = Math.trunc(Math.random() * 6) + 1;
    console.log(randomNumber);
    if (randomNumber != 1) {
        player1CScore += randomNumber;
        player1CurrentScore.textContent = player1CScore;
    }
    else {
        turn = 0;
    }
}

const player2Turn = function () {
    player2BgClr.style.backgroundColor = "rgba(245, 245, 245, 0.788)";
    let randomNumber = Math.trunc(Math.random() * 6) + 1;
    console.log(randomNumber);
    //pic display
    if (randomNumber != 1) {
        player2CScore += randomNumber;
        player2CurrentScore.textContent = player2CScore;
    }
    else {
        turn = 1;
    }
}

rollDiceBtn.addEventListener("click", function () {
    if (turn)
        player1Turn();
    else
        player2Turn();
});

holdBtn.addEventListener("click", function () {
    if (turn) {
        player1FScore += player1CScore;
        player1FinalScore.textContent = player1FScore;
        player1CScore = 0;
        player1CurrentScore.textContent = "0";
        player1BgClr.style.backgroundColor = "rgba(245, 245, 245, 0.438)";
        turn = 0;
        player2Turn();
    }
    else {
        player2FScore += player2CScore;
        player2FinalScore.textContent = player2FScore;
        player2CScore = 0;
        player2CurrentScore.textContent = "0";
        player2BgClr.style.backgroundColor = "rgba(245, 245, 245, 0.438)";
        turn = 1;
        player1Turn();
    }
})
