"use strict";
function checkNumber() {
  let actualNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(actualNumber);
  let guessNumber = Number(document.querySelector(".Guess").value);
  console.log(guessNumber);
  if (actualNumber === guessNumber) {
    document.querySelector(".main").style.backgroundColor = "green";
    document.querySelector(".main-content__message").innerHTML =
      "Correct Guess!!";
  } else if (guessNumber > actualNumber) {
    document.querySelector(".main-content__message").innerHTML = "📈Too High..";
  } else if (guessNumber < actualNumber) {
    document.querySelector(".main-content__message").innerHTML = "📉Too Low..";
  }
}
