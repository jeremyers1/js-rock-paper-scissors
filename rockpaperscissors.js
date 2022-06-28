let humWins = 0;
let compWins = 0; 
let humanRPS = 0;

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', playHand);
});

function game(hands = 5) {
    for (let i = 0; i < hands; i++){
        let c = computerChoice();
        let h = humanChoice();
        oneHand(c,h);
    }

    if (humWins > compWins) {
        console.log(`You won ${humWins} games and the computer won ${compWins} games. So you beat the computer!`);
    } else if (humWins < compWins) {
        console.log(`You won ${humWins} games and the computer won ${compWins} games. So you lost to the computer!`);
    } else {
        console.log(`You won ${humWins} games and the computer won ${compWins} games. So you tied! Let's do a tie-breaker.`);
        game(1);
    }
}

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
            console.log("You both chose Rock. It's a tie!");
        } else if (hum == 2) {
            console.log("Computer chose Rock and you chose Paper. You win!");
            humWins++;
        } else {
            console.log("Computer chose Rock and you chose Scissors. Computer wins!");
            compWins++;
        }
    } else if (comp == 2) {
        if (hum == 2) {
            console.log("You both chose Paper. It's a tie!");
        } else if (hum == 3) {
            console.log("Computer chose Paper and you chose Scissors. You win!");
            humWins++;
        } else {
            console.log("Computer chose Paper and you chose Rock. Computer wins!");
            compWins++;
        }
    } else {
        if (hum == 3) {
            console.log("You both chose Scissors. It's a tie!");
        } else if (hum == 1) {
            console.log("Computer chose Scissors and you chose Rock. You win!");
            humWins++;
        } else {
            console.log("Computer chose Scissors and you chose Paper. Computer wins!");
            compWins++;
        }
    }
}