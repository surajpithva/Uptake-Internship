"use strict";

// console.log(document.querySelector(".message").textContent);
//
// document.querySelector(".message").textContent = "Correct Number";
// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;
// document.querySelector(".guess").value = 3;
//
// console.log(document.querySelector(".guess").value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highestscore = 0;

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");

// create user defined funcation for   document.querySelector(".message").textContent = message; this line

const displymessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = score;

  //document.querySelector(".message").textContent = "Start guessimg....";
  displymessage("Start guessimg....");
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  //document.querySelector("body").style.backgroundColor = "";

  document.querySelector(".number").style.width = "15rem";
});

// document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "no number";
    displymessage("no number");
  } else if (guess > 20) {
    displymessage("Number is not valid try between 1 to 20");
  } else if (guess < 0) {
    displymessage("Number is not valid try between 1 to 20");
  }
  //if number is correct
  else if (guess === secretNumber) {
    //------------------ box model start-------------------------
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");

    document.querySelector(".congratsmsg").textContent = guess + " અભિનંદન...";

    btnCloseModal.addEventListener("click", function () {
      modal.classList.add("hidden");
      overlay.classList.add("hidden");
    });

    //------------------ box model end-------------------------

    //document.querySelector(".message").textContent = "Correct Number";
    document.querySelector(".number").textContent = secretNumber;
    // code b

    displymessage("Correct Number");

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";
    if (score > highestscore) {
      highestscore = score;
      document.querySelector(".highscore").textContent = highestscore;
    }
  } else if (guess != secretNumber) {
    if (score > 1) {
      //document.querySelector(".message").textContent =
      //guess > secretNumber ? "Too high " : "Too low";

      displymessage(guess > secretNumber ? "Too high " : "Too low");

      score = score - 1; // score --
      document.querySelector(".score").textContent = score;
    } else {
      displymessage("You lost the game");
      //document.querySelector(".message").textContent = "You lost the Game";
      document.querySelector(".check").disabled = true;
      document.querySelector(".score").textContent = 0;
    }
  }

  // we use ternory operator in above  code beacuse too high and too low code are same and if we use above then code reduce

  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "Too high";
  //     score = score - 1; // score --
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "You lost the Game";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = " Too Low";
  //     score = score - 1; // score --
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "You lost the Game";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
});
