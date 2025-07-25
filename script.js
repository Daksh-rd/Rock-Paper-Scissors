let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomVal = Math.floor(Math.random()*3);
    let choice;

    if(randomVal === 0) {
        choice = "Rock";
    } else if(randomVal === 1) {
        choice = "Paper";
    } else {
        choice = "Scissors";
    }

    return choice;
}

function getHumanChoice() {
    let humanChoice = prompt("Enter your choice:");

    if(
        humanChoice === "Rock" ||
        humanChoice === "rock" ||
        humanChoice === "Paper" ||
        humanChoice === "paper" ||
        humanChoice === "Scissors" ||
        humanChoice === "scissors"
    ) {
        return humanChoice;
    } else {
        return null;
    }
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if(humanChoice === computerChoice) {
        console.log("It's a tie");
    } else if(
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else if(
        (computerChoice === 'rock' && humanChoice === 'scissors') ||
        (computerChoice === 'paper' && humanChoice === 'rock') ||
        (computerChoice === 'scissors' && humanChoice === 'paper')
    ) {
        computerScore++;
        console.log(`You lose ${computerChoice} beats ${humanChoice}`);
    } else {
        console.log("Invalid choice! Please select rock, paper or scissor");
    }
}

const humanSelection = getHumanChoice();
if(!humanSelection) {
    console.log("Invalid input. Game cancelled.");
} else {
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);   
    console.log(`Your score - ${humanScore} :: Computer's score - ${computerScore}`);
}

