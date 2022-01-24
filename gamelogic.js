let playerScore = 0;
let sheldonScore = 0;
let i = 0;
const computerGuess = ['rock', 'paper', 'scissors', 'lizard', 'spock']


function game () {
        let playerSelection = prompt ("Choose rock paper scissors lizard spock");
        const sheldonSelection = computerPlay(computerGuess);
        console.log(sheldonSelection);
        playRound(playerSelection,sheldonSelection);
}

//computer random guesses
function computerPlay(oGuess) {
    
    return oGuess[~~(Math.random()*oGuess.length)];

}

function playRound (playerSelection, sheldonSelection){

    if (playerSelection == sheldonSelection) {
        console.log('tied');
    } else if (
        (playerSelection == "scissors" && sheldonSelection == "paper") ||
        (playerSelection == "paper" && sheldonSelection == "rock") ||
        (playerSelection == 'rock' && sheldonSelection == 'lizard') ||
        (playerSelection == 'lizard' && sheldonSelection == 'spock') ||
        (playerSelection == 'spock' && sheldonSelection == 'scissors') ||
        (playerSelection == 'scissors' && sheldonSelection == 'lizard') ||
        (playerSelection == 'lizard' && sheldonSelection == 'paper') ||
        (playerSelection == 'paper' && sheldonSelection == 'spock') ||
        (playerSelection == 'spock' && sheldonSelection == 'rock') ||
        (playerSelection == 'rock' && sheldonSelection == 'scissors')
    ) {
        playerScore = ++ playerScore;
        console.log("You win " + playerScore + " times!");
        if (playerScore === 5){
            console.log("You win!");
        }
        console.log ("You win!" + playerSelection + " beats " + sheldonSelection);
    } else {
            console.log ("You lose" + sheldonSelection + "beats" + playerSelection);
            sheldonScore = ++ sheldonScore;
            console.log("You lose Sheldon wins " + sheldonScore + " times!");
            if (sheldonScore === 5) {
            console.log ("You lose! Bazinga!");
            }
        }

}

do {
    game();
    } while (playerScore < 5 || sheldonScore < 5);
