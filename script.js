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

function playGame() {
    let humanScore = 0
    let computerScore = 0
    let humanChoice
    let computerChoice

    function playRound(humanChoice, computerChoice) {
        if ((humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "scissors") && computerChoice === "paper" ||
            (humanChoice === "paper" && computerChoice === "rock")) {
                humanScore++
                console.log("You win this round!")
        } else if ((computerChoice === "rock" && humanChoice === "scissors") ||
            (computerChoice === "scissors") && humanChoice === "paper" ||
            (computerChoice === "paper" && humanChoice === "rock")) {
                computerScore++
                console.log("You lose this round.")
        } else {
            console.log("It's a draw!")
        }
        console.log(`Score: you are ${humanScore} to ${computerScore}.`)
    }

    for (let i = 0; i < 5; i++) {
        humanChoice = getHumanChoice()
        computerChoice = getComputerChoice()

        playRound(humanChoice, computerChoice)
    }

    if (humanScore > computerScore) {
        console.log(`You win the best of 5. You scored ${humanScore} of 5.`)
    } else if (computerScore > humanScore) {
        console.log(`You lose the best of 5. You scored ${humanScore} of 5.`)
    } else {
        console.log(`It's a draw. Both sides scored ${humanScore}.`)
    }
}

playGame()