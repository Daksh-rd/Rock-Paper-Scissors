# Rock-Paper-Scissors Game

This is a simple command-line based implementation of the classic **Rock-Paper-Scissors** game, where a user competes against the computer. The game allows the user to choose between "rock", "paper", or "scissors" in each round and then evaluates the outcome of that round based on the rules of the game. It keeps track of the scores for both the human and the computer across five rounds.

## Key Features
- **Random Computer Choice**: The computer's move is randomly selected from "rock", "paper", or "scissors".
- **User Input Validation**: The game prompts the user to enter their choice and ensures that only valid options ("rock", "paper", or "scissors") are accepted.
- **Round Evaluation**: After each round, the winner is determined based on the rules of the game:
  - Rock beats Scissors
  - Scissors beats Paper
  - Paper beats Rock
- **Score Tracking**: The game keeps track of both the human and computer's scores throughout 5 rounds.
- **Game End Evaluation**: At the end of 5 rounds, the program announces the winner based on the scores.

## How the Code Works

1. **Global Variables**:
   - `humanScore` and `computerScore`: These variables store the score for both the player (human) and the computer.

2. **`getComputerChoice` Function**:
   - This function generates a random number (0, 1, or 2) to randomly select the computer's move.
   - The choices are mapped as follows:
     - 0 → "rock"
     - 1 → "paper"
     - 2 → "scissors"
   - The function then returns the selected choice.

3. **`getHumanChoice` Function**:
   - This function prompts the user to input their choice (either "rock", "paper", or "scissors").
   - If the user enters an invalid choice (anything other than "rock", "paper", or "scissors"), the function will keep prompting the user until a valid choice is entered.
   - The entered choice is returned in lowercase to ensure consistency.

4. **`playRound` Function**:
   - This function takes in both the human's and the computer's choices as arguments.
   - It compares the two choices to determine the winner:
     - If both choices are the same, it's a tie.
     - If the human's choice beats the computer's choice, the human wins the round and their score is incremented.
     - If the computer's choice beats the human's choice, the computer wins the round and their score is incremented.
   - The function returns a string indicating the result of the round (win/lose/tie).

5. **`playGame` Function**:
   - This function manages the flow of the game.
   - It runs a loop for 5 rounds, asking the user for their choice and getting the computer's choice for each round.
   - It displays the choices of both the human and the computer, evaluates the round result, and updates the scores accordingly.
   - After 5 rounds, the function compares the scores and announces the winner (or a tie if the scores are equal).

6. **Final Game Result**:
   - At the end of 5 rounds, the game announces whether the human or the computer is the overall winner based on the score.

## Concepts Used in the Code
1. **Variables**: 
   - The game uses variables (`humanScore`, `computerScore`, `userChoice`, `randomVal`, etc.) to store and track the state of the game.
   
2. **Functions**: 
   - Several functions are defined to break down the game logic into manageable parts (`getComputerChoice`, `getHumanChoice`, `playRound`, `playGame`).

3. **Loops**:
   - A `for` loop is used to repeat the game for 5 rounds.
   
4. **Conditionals**:
   - `if` and `else if` statements are used to evaluate the choices and determine the winner of each round, as well as the overall winner at the end.

5. **User Input**:
   - The `prompt()` function is used to capture user input in the browser environment.
   
6. **Randomization**:
   - The computer's choice is determined using `Math.random()` to generate random numbers, and `Math.floor()` is used to round the value.

7. **String Manipulation**:
   - The `toLowerCase()` and `toLocaleLowerCase()` methods are used to standardize user input, ensuring the game works regardless of whether the user enters uppercase or lowercase characters.

8. **Console Output**:
   - The game provides feedback after each round via `console.log()`, showing the choices made, the results, and the current score.

## How to Play
1. Run the program in a JavaScript-enabled environment (like a browser console).
2. The game will ask you to input your choice (rock, paper, or scissors) at the start of each round.
3. The computer will randomly choose its move.
4. The game will announce the result of each round and keep track of the scores.
5. After 5 rounds, the game will announce the winner based on the score.

## Example Game Output
Round: 1
Enter your choice(rock, paper or scissors): rock
Human chose: rock
Computer chose: scissors
You win! rock beats scissors
Current score - Human: 1, Computer: 0

Round: 2
Enter your choice(rock, paper or scissors): paper
Human chose: paper
Computer chose: rock
You win! paper beats rock
Current score - Human: 2, Computer: 0

...

Congratulations, you win the game!