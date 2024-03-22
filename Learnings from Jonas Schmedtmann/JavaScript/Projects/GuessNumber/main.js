"use strict";
let actualNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
let mainBackgroundStyle = document.querySelector(".main");
let message = document.querySelector(".main-content__message");
let actualNumberMsg = document.querySelector(".main-content__actual-number");
let inputBackground = document.querySelector(".Guess");
let scoreMsg = document.querySelector(".main-content__score");
let highScoreMsg = document.querySelector(".main-content__highscore");

document
  .querySelector(".main-content__check")
  .addEventListener("click", function () {
    let guessNumber = Number(document.querySelector(".Guess").value);
    if (actualNumber === guessNumber) {
      if (highScore < score) highScore = score;
      mainBackgroundStyle.style.backgroundColor = "green";
      message.textContent = "🎉 Correct Guess!!";
      actualNumberMsg.textContent = actualNumber;
      inputBackground.style.backgroundColor = "green";
      scoreMsg.textContent = score;
      highScoreMsg.textContent = highScore;
    } else if (guessNumber > 20 || guessNumber <= 0 || !guessNumber)
      message.textContent = "⛔Number Out of Range";
    else if (guessNumber != actualNumber) {
      if (score > 1) {
        message.textContent =
          guessNumber > actualNumber ? "📈Too High.." : "📉Too Low..";
        score--;
        scoreMsg.textContent = score;
      } else {
        scoreMsg.textContent = "0";
        message.textContent = "💥GAME OVER!!";
      }
    }
  });

document
  .querySelector(".header__play-again")
  .addEventListener("click", function () {
    actualNumber = Math.trunc(Math.random() * 20) + 1;
    actualNumberMsg.textContent = "?";
    message.textContent = "Start Guessing...";
    mainBackgroundStyle.style.backgroundColor = "black";
    inputBackground.style.backgroundColor = "black";
    document.querySelector(".Guess").value = "";
    score = "20";
    scoreMsg.textContent = score;
  });
