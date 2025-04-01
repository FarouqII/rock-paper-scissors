const btn = document.querySelector("button");
const buttons = document.querySelector(".buttons");
const rock = document.querySelector("#ROCK");
const paper = document.querySelector("#PAPER");
const scissors = document.querySelector("#SCISSORS");
const display = document.querySelector("#display");

function getComputerChoice() {
    choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return "ROCK";
        case 1:
            return "PAPER"
        case 2:
            return "SCISSORS"
    }
}

let playerScore = 0;
let computerScore = 0;

buttons.addEventListener('click', (event) => {
    let target = event.target.closest("button");
    if (!target) return;
    let playerChoice = null;

    if (target.id === "ROCK" || target.id === "PAPER" || target.id === "SCISSORS") {
        playerChoice = target.id;
    }

    let computerChoice = getComputerChoice();
    if (playerChoice === computerChoice) {roundWinner.innerText = "Tie!"}
    else if (
        playerChoice === "ROCK" && computerChoice === "SCISSORS" ||
        playerChoice === "PAPER" && computerChoice == "ROCK" ||
        playerChoice === "SCISSORS" && computerChoice === "PAPER"
    ) {
        playerScore++;
        display.innerText = "You Win!"
    }
    else {
        computerScore++;
        display.innerText = "Computer Wins!"
    }
    console.log(computerChoice);

    if (playerScore >= 5) {display.innerText = "You win the game!"}
    else if (computerScore >= 5) {display.innerText = "Computer wins the game!"}
})