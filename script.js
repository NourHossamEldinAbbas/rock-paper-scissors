let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, button) {
  const computerSelection = computerPlay();
  let result = "";

  if (playerSelection === computerSelection) {
    result = `It's a tie! Both chose ${playerSelection}.`;
    button.classList.add("tie");
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    result = `You win! ${playerSelection} beats ${computerSelection}.`;
    button.classList.add("win");
    playerScore++;
  } else {
    result = `You lose! ${computerSelection} beats ${playerSelection}.`;
    button.classList.add("lose");
    computerScore++;
  }

  document.getElementById("roundResult").textContent = result;
  document.getElementById(
    "score"
  ).textContent = `Player: ${playerScore} | Computer: ${computerScore}`;

  setTimeout(() => button.classList.remove("win", "lose", "tie"), 500);

  if (playerScore === 5 || computerScore === 5) {
    const winnerText =
      playerScore === 5 ? "You won the game!" : "Computer won the game!";
    document.getElementById("winner").textContent = winnerText;

    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
  }
}

// Event listeners
document.getElementById("rock").addEventListener("click", function() {
  playRound("Rock", this);
});
document.getElementById("paper").addEventListener("click", function() {
  playRound("Paper", this);
});
document.getElementById("scissors").addEventListener("click", function() {
  playRound("Scissors", this);
});
