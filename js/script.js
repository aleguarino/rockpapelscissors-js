const MOVEMENT = ["ROCK", "PAPER", "SCISSORS"];
let roundsPlayed = 0;
let playerScore = 0;
let computerScore = 0;

let getComputerChoice = () => (MOVEMENT[~~(Math.random() * MOVEMENT.length)]);

function playRound(playerSelection, computerSelection) {
    if (MOVEMENT.includes(playerSelection)) {
        if (playerSelection == computerSelection) {
            return "TIE";
        } else if (
            (playerSelection == 'ROCK' && computerSelection == 'PAPER') ||
            (playerSelection == 'PAPER' && computerSelection == 'SCISSORS') ||
            (playerSelection == 'SCISSORS' && computerSelection == 'ROCK')
        ) {
            computerScore++;
            return `You Lose! ${computerSelection} beats ${playerSelection}`;
        } else {
            playerScore++;
            return `You Win! ${playerSelection} beats ${computerSelection}`;
        }
    }
    else {
        console.log(playerSelection);
        console.log(computerSelection);
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, paper, scissors?");
        roundsPlayed++;
        console.log(playRound(playerSelection.toString().toUpperCase(), getComputerChoice()));
    }
    result();
}

function result() {
    console.log("#######################################")
    if (playerScore > computerScore)
        console.log(`CONGRATULATIONS! YOU WIN ${playerScore} - ${computerScore}`);
    else if (playerScore < computerScore)
        console.log(`COMPUTER WINS! YOU LOSE ${playerScore} - ${computerScore}`);
    else
        console.log(`TIE!!`);
    console.log("#######################################")

}

game();

