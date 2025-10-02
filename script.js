function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    /* 
        Math.random() generates a random number between 0 (inclusive) and 1 (exclusive).
        *3 scales it to a range of 0 to 3 (exclusive). like 2.3
        Math.floor() rounds down to the nearest whole number, resulting in 0, 1, or 2.
    */

    if (computerChoice === 0) {
        return "rock";
    } else if (computerChoice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let userChoice = prompt("Enter 1 for rock, 2 for paper, 3 for scissors:");

    if (userChoice === 1) {
        return "rock";
    } else if (userChoice === 3) {
        return "paper";
    } else {
        return "scissors";
    }
}

let computerScore = 0;
let humanScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}.`;
    }
}

function playGame() {

    for (let round = 1; round <= 5; round++) {
        console.log(`Round ${round}:`);
        console.log(playRound(getHumanChoice(), getComputerChoice()));
        console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
    }

    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (computerScore > humanScore) {
        console.log("Sorry, you lost the game.");
    } else {
        console.log("The game is a tie!");
    }
}

playGame();