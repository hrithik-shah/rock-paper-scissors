function getComputerChoice() {
    const randInt = Math.floor(Math.random() * 3)
    if (randInt === 0) {
        return "rock"
    } else if (randInt === 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

function getHumanChoice() {
    let userInt = prompt("Enter 0 for rock, 1 for paper, or 2 for scissors: ")
    userInt = parseInt(userInt)
    if (userInt === 0) {
        return "rock"
    } else if (userInt === 1) {
        return "paper"
    } else if (userInt === 2) {
        return "scissors"
    } else {
        return null
    }
}

function playRound(humanChoice, computerChoice) {
    if ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors") && computerChoice === "paper" ||
        (humanChoice === "paper" && computerChoice === "rock")) {
            humanScore++;
            roundOutcomeText.innerText = "You win this round!";
    } else if ((computerChoice === "rock" && humanChoice === "scissors") ||
        (computerChoice === "scissors") && humanChoice === "paper" ||
        (computerChoice === "paper" && humanChoice === "rock")) {
            computerScore++;
            roundOutcomeText.innerText = "You lose this round.";
    } else {
        roundOutcomeText.innerText = "It's a draw!";
    }
    currentScoreSummary.innerText = `Score: you are ${humanScore} to ${computerScore}.`;
}

let humanScore = 0;
let computerScore = 0;

const buttonsDiv = document.createElement("div");

document.body.appendChild(buttonsDiv);

const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");

rockButton.innerText = "rock";
paperButton.innerText = "paper";
scissorsButton.innerText = "scissors";

buttonsDiv.appendChild(rockButton);
buttonsDiv.appendChild(paperButton);
buttonsDiv.appendChild(scissorsButton);

const resultsDiv = document.createElement("div");

document.body.appendChild(resultsDiv);

const roundOutcomeText = document.createElement("p");
const currentScoreSummary = document.createElement("p");

resultsDiv.appendChild(roundOutcomeText);
resultsDiv.appendChild(currentScoreSummary);

rockButton.addEventListener("click", () => playRound("rock", getComputerChoice()));
paperButton.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissorsButton.addEventListener('click', () => playRound("scissors", getComputerChoice()));