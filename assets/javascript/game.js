//Game outline:
//pull a random letter from the alphabet
//log users guesses
//maximum of 9 before game resets
//on a correct guess reset the game
//keep track of wins
//


var alphabet = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

// var correctGuess = false; <- not sure if i need this yet

var wins = 0;
var attempts = 9;
var guessedLetters = [];
var losses = 0;


var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

// function computerChoice() {
//     alphabet[Math.floor(Math.random() * alphabet.length)];
// }

// computerChoice()

//failed RNG function

console.log(computerChoice);
//need to turn my RNG into a function
function updateWins() {
    // function to update wins as they happen
    winsElement = document.getElementById("wins");
    winsElement.textContent = wins;

}

function updateGuessesLeft() {
    //function to update how many guesses the player has left
    guessesLeftElement = document.getElementById("guessesLeft");
    guessesLeftElement.textContent = attempts;
}

function updateLosses() {
    //function to update losses
    lossesElement = document.getElementById("losses");
    lossesElement.textContent = losses;
}
document.onkeyup = function (event) {
    //logging key presses
    console.log(event.key)
    var playerGuess = event.key;
    if (alphabet.includes(playerGuess)) {
        //makes it so only the alphabet counts against the guesses
        if (playerGuess === computerChoice) {
            wins++;
            attempts = 9;
            guessedLetters = [];

            console.log(wins);

            updateWins();
            updateGuessesLeft();
        }

        if (playerGuess != computerChoice) {
            attempts--;

            updateGuessesLeft();

        }
        if (guessedLetters.indexOf(playerGuess) >= 0) {
        }
        if (attempts == "0") {
            guessedLetters = [];
            attempts = 9;
            losses += 1;

            updateLosses();

            //doesnt reset until you go past 0

        }
        else {
            guessedLetters.push(playerGuess);
            document.getElementById("guesses").innerHTML = guessedLetters;
            console.log(guessedLetters);
        }

    }

    //code an else, if they do not guess correctly their number of guesses goes down by one
    //also need a reset when their number of guesses hits 0 OR when they get a win
}
//if the player guesses the correct letter the wins goes up by 1
//and the attempts as well as the guessed letters resets back to 9 and none respectively