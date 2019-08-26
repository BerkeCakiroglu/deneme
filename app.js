const game = () => {
  let pScore = 0;
  let cScore = 0;
  const startgame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const matchscreen = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeout");
      matchscreen.classList.add("fadein");
    });
    const playMatch = () => {
      const options = document.querySelectorAll(".options button");
      const playerHand = document.querySelect(".player-hand");
      const computerHand = document.querySelect(".computer-hand");

      // computer options
      const computerOptions = ["rock", "paper", "scissors"];

      options.forEach(option => {
        option.addEventListener("click", function() {
          //computer choice
          const computerNumber = Math.floor(Math.random() * 3);
          const computerChoise = computerOptions[computerNumber];
        });
      });
    };
    const winner = document.querySelector(".winner");
    const compareHands = (playerChoice, computerChoise) => {
      // for tie
      if (playerChoice === computerChoise) {
        winner.textContent = "it is a tie";
        return;
      }
      if (playerChoice === "rock") {
        if (computerChoise === "paper") {
          winner.textContent = "computer wins";
          return;
        } else {
          winner.textContent = " player wins";
        }
      }
      if (playerChoice === "paper") {
        if (computerChoise === "rock") {
          winner.textContent = "player wins";
          return;
        } else {
          winner.textContent = "computer wins";
        }
      }
      if (playerChoice === "scissors") {
        if (computerChoise === "rock") {
          winner.textContent = "computer wins";
          return;
        } else {
          winner.textContent = " player wins";
        }
      }
    };
  };

  startgame();
};
game();
