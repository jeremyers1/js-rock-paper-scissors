let humWins = 0;
let compWins = 0; 
let humanRPS = 0;

const choices = document.querySelector('#choices');
const compScore = document.querySelector('#computerScore');
const humScore = document.querySelector('#humanScore');
const winner = document.querySelector('#winner');
const buttons = document.querySelectorAll('button');

/* example of how:
const div = document.querySelector('div')
div.textContent = "My new text!";
*/

buttons.forEach((button) => {
    button.addEventListener('click', playHand);
});

function computerChoice() {
    return Math.floor(Math.random() * 3) + 1;
}

function playHand() {
    if (this.id === "rock") humanRPS = 1; 
    else if (this.id === "paper") humanRPS = 2; 
    else if (this.id === "scissors") humanRPS = 3;
    checkWhoWins(computerChoice(), humanRPS)
} 

function checkWhoWins(comp, hum) {
    if (comp == 1) {
        if (hum == 1) {
            choices.textContent = "You both chose Rock. It's a tie!";
        } else if (hum == 2) {
            choices.textContent = "Computer chose Rock and you chose Paper. You win!";
            humWins++;
        } else {
            choices.textContent = "Computer chose Rock and you chose Scissors. Computer wins!";
            compWins++;
        }
    } else if (comp == 2) {
        if (hum == 2) {
            choices.textContent = "You both chose Paper. It's a tie!";
        } else if (hum == 3) {
            choices.textContent = "Computer chose Paper and you chose Scissors. You win!";
            humWins++;
        } else {
            choices.textContent = "Computer chose Paper and you chose Rock. Computer wins!";
            compWins++;
        }
    } else {
        if (hum == 3) {
            choices.textContent = "You both chose Scissors. It's a tie!";
        } else if (hum == 1) {
            choices.textContent = "Computer chose Scissors and you chose Rock. You win!";
            humWins++;
        } else {
            choices.textContent = "Computer chose Scissors and you chose Paper. Computer wins!";
            compWins++;
        }
    }
}


