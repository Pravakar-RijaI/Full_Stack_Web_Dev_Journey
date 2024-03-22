"use strict";
let actualNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

function checkNumber() {
  let guessNumber = Number(document.querySelector(".Guess").value);
  if (actualNumber === guessNumber) {
    if (highScore < score) highScore = score;
    document.querySelector(".main").style.backgroundColor = "green";
    document.querySelector(".main-content__message").innerHTML =
      "🎉 Correct Guess!!";
    document.querySelector(".main-content__actual-number").innerText =
      actualNumber;
    document.querySelector(".Guess").style.backgroundColor = "green";
    document.querySelector(".main-content__score").innerHTML = score;
    document.querySelector(".main-content__highscore").innerHTML = highScore;
  } else if (guessNumber > 20 || guessNumber <= 0) {
    document.querySelector(".main-content__message").innerHTML =
      "⛔Number Out of Range";
  } else if (guessNumber > actualNumber) {
    if (score > 1) {
      document.querySelector(".main-content__message").innerHTML =
        "📈Too High..";
      score--;
      document.querySelector(".main-content__score").innerHTML = score;
    } else {
      document.querySelector(".main-content__score").innerHTML = "0";
      document.querySelector(".main-content__message").innerHTML =
        "💥GAME OVER!!";
    }
  } else if (guessNumber < actualNumber) {
    if (score > 1) {
      document.querySelector(".main-content__message").innerHTML =
        "📉Too Low..";
      score--;
      document.querySelector(".main-content__score").innerHTML = score;
    } else {
      document.querySelector(".main-content__score").innerHTML = "0";
      document.querySelector(".main-content__message").innerHTML =
        "💥GAME OVER!!";
    }
  }
}

document
  .querySelector(".header__play-again")
  .addEventListener("click", function () {
    actualNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(".main-content__actual-number").innerText = "?";
    document.querySelector(".main-content__message").innerHTML =
      "Start Guessing...";
    document.querySelector(".main").style.backgroundColor = "black";
    document.querySelector(".Guess").style.backgroundColor = "black";
    document.querySelector(".Guess").value = "";
    score = 20;
    document.querySelector(".main-content__score").innerHTML = score;
  });
