let humWins = 0;
let compWins = 0; 

function game(hands = 5) {
    for (let i = 0; i < hands; i++){
        let c = computerChoice();
        let h = humanChoice();
        oneHand(c,h);
    }

    if (humWins > compWins) {
        alert(`You won ${humWins} games and the computer won ${compWins} games. So you beat the computer!`);
    } else if (humWins < compWins) {
        alert(`You won ${humWins} games and the computer won ${compWins} games. So you lost to the computer!`);
    } else {
        alert(`You won ${humWins} games and the computer won ${compWins} games. So you tied! Let's do a tie-breaker.`);
        game(1);
    }
}

function computerChoice() {
    return Math.floor(Math.random() * 3) + 1;
}

function humanChoice() {
    let choice = 0;
    while (choice != 1 && choice != 2 && choice != 3){
        choice = window.prompt('What do you want to choose? Enter 1 for rock, 2 for paper, or 3 for scissors.');
        if (choice != 1 && choice != 2 && choice != 3) {
            alert("You did not enter 1, 2, or 3. Try again!");
        }
    }
    return choice;
}

function oneHand(comp, hum) {
    if (comp == 1) {
        if (hum == 1) {
            alert("You both chose Rock. It's a tie!");
        } else if (hum == 2) {
            alert("Computer chose Rock and you chose Paper. You win!");
            humWins++;
        } else {
            alert("Computer chose Rock and you chose Scissors. Computer wins!");
            compWins++;
        }
    } else if (comp == 2) {
        if (hum == 2) {
            alert("You both chose Paper. It's a tie!");
        } else if (hum == 3) {
            alert("Computer chose Paper and you chose Scissors. You win!");
            humWins++;
        } else {
            alert("Computer chose Paper and you chose Rock. Computer wins!");
            compWins++;
        }
    } else {
        if (hum == 3) {
            alert("You both chose Scissors. It's a tie!");
        } else if (hum == 1) {
            alert("Computer chose Scissors and you chose Rock. You win!");
            humWins++;
        } else {
            alert("Computer chose Scissors and you chose Paper. Computer wins!");
            compWins++;
        }
    }
}

game(5);