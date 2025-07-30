let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomVal = Math.floor(Math.random() * 3);

    if (randomVal === 0) {
        return "rock";
    } else if (randomVal == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    userChoice = prompt("Enter your choice(rock, paper or scissors): ").toLowerCase();

    while (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
        userChoice = prompt("Invalid choice. Please enter rock, paper or scissors: ").toLocaleLowerCase();
    }

    return userChoice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        return "It's a tie";
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}`;
    } else if (
        (computerChoice === 'rock' && humanChoice === 'scissors') ||
        (computerChoice === 'paper' && humanChoice === 'rock') ||
        (computerChoice === 'scissors' && humanChoice === 'paper')
    ) {
        computerScore++;
        return `You lose ${computerChoice} beats ${humanChoice}`;
    } else {
        return "Invalid choice! Please select rock, paper or scissor";
    }
}

function playGame() {
    for (let round = 1; round <= 5; round++) {
        console.log(`Round: ${round}`);

        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        console.log(`Human chose: ${humanChoice}`);
        console.log(`Computer chose: ${computerChoice}`);

        let roundResult = playRound(humanChoice, computerChoice);

        if (roundResult === `You win! ${humanChoice} beats ${computerChoice}`) {
            // humanScore++;
            console.log("You win this round");
        } else if (roundResult === `You lose ${computerChoice} beats ${humanChoice}`) {
            // computerScore++;
            console.log("Computer wins this round");
        } else {
            console.log("It's a tie");
        }

        console.log(`Current score - Human: ${humanScore}, Computer: ${computerScore}`);
    }

    if(humanScore > computerScore) {
        console.log("Congratulations, you win the game!");
    } else if(computerScore > humanScore) {
        console.log("The computer wins the game!");
    } else {
        console.log("The game is a tie!");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playGame());