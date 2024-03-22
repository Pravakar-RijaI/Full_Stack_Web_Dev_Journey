"use strict";

let actualNumber = Math.trunc(Math.random() * 20) + 1;
let guess = document.querySelector(".Guess");
let score = 20;
let highScore = 0;

function displayMsg(className, message) {
  document.querySelector("." + className).textContent = message;
}

function styleBackground(className, color) {
  document.querySelector("." + className).style.backgroundColor = color;
}

document
  .querySelector(".main-content__check").addEventListener("click", function () {

    let guessNumber = Number(guess.value);

    if (actualNumber === guessNumber) {

      if (highScore < score)
        highScore = score;

      styleBackground("main", "green");
      displayMsg("main-content__message", "🎉 Correct Guess!!");
      displayMsg("main-content__actual-number", actualNumber);
      styleBackground("Guess", "green");
      displayMsg("main-content__score", score);
      displayMsg("main-content__highscore", highScore);

    }

    else if (guessNumber > 20 || guessNumber <= 0 || !guessNumber)
      displayMsg("main-content__message", "⛔Number Out of Range");

    else if (guessNumber != actualNumber) {

      if (score > 1) {

        displayMsg("main-content__message", guessNumber > actualNumber ? "📈Too High.." : "📉Too Low..");
        score--;
        displayMsg("main-content__score", score);

      }

      else {

        displayMsg("main-content__score", "0");
        displayMsg("main-content__message", "💥GAME OVER!!");

      }
    }
  });

document.querySelector(".header__play-again").addEventListener("click", function () {

  actualNumber = Math.trunc(Math.random() * 20) + 1;

  displayMsg("main-content__actual-number", "?");
  displayMsg("main-content__message", "Start Guessing...");
  styleBackground("main", "black");
  styleBackground("Guess", "black");
  guess.value = "";
  score = "20";
  displayMsg("main-content__score", score);

});
