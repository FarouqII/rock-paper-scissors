function getComputerChoice() {
    choice = Math.floor(Math.random() * 3);
    if (choice === 0) {return "ROCK"}
    else if (choice === 1) {return "PAPER"}
    else return "SCISSORS"
}

function getHumanChoice() {
    choice = prompt("Rock, Paper, or Scissors?");
    return choice.toUpperCase()
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {return "TIE"}
        if (
            (humanChoice === "ROCK" && computerChoice === "PAPER") ||
            (humanChoice === "PAPER" && computerChoice === "SCISSORS") ||
            (humanChoice === "SCISSORS" && computerChoice === "ROCK")) {
            computerScore += 1
            return "Computer Wins!"
        }
        else if (
            (computerChoice === "ROCK" && humanChoice === "PAPER") ||
            (computerChoice === "PAPER" && humanChoice === "SCISSORS") ||
            (computerChoice === "SCISSORS" && humanChoice === "ROCK")) {
            humanScore += 1
            return "You Win!"
        }
    }

    for (i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(`Round ${i + 1}\nYou: ${humanSelection}\nComputer: ${computerSelection}\nResult: ${playRound(humanSelection, computerSelection)}`);
    }

    console.log(`Game Results:\nYou: ${humanScore}\nComputer: ${computerScore}`);
    if (humanScore > computerScore) {console.log("You Won!")}
    else if (humanScore < computerScore) {console.log("Computer Won!")}
    else console.log("Tie!")
}

playGame()