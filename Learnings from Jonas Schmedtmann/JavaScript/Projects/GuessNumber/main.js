"use strict";
let actualNumber = Math.trunc(Math.random() * 20) + 1;
let score = 0;
let highScore = 0;

function checkNumber() {
  let guessNumber = Number(document.querySelector(".Guess").value);
  if (actualNumber === guessNumber) {
    document.querySelector(".main").style.backgroundColor = "green";
    document.querySelector(".main-content__message").innerHTML =
      "🎉 Correct Guess!!";
    document.querySelector(".main-content__actual-number").innerText =
      actualNumber;
    document.querySelector(".Guess").style.backgroundColor = "green";
    score++;
    document.querySelector(".main-content__score").innerHTML = score;
  } else if (guessNumber > 20 || guessNumber <= 0) {
    document.querySelector(".main-content__message").innerHTML =
      "⛔Number Out of Range";
  } else if (guessNumber > actualNumber) {
    document.querySelector(".main-content__message").innerHTML = "📈Too High..";
  } else if (guessNumber < actualNumber) {
    document.querySelector(".main-content__message").innerHTML = "📉Too Low..";
  }
}

document
  .querySelector(".header__play-again")
  .addEventListener("click", function () {
    actualNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(".main-content__message").innerHTML =
      "Start Guessing...";
    document.querySelector(".main").style.backgroundColor = "black";
    document.querySelector(".Guess").style.backgroundColor = "black";
    document.querySelector(".Guess").value = "";
  });
