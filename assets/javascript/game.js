// Set up varaibles here
var cpuLetters =  ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

var wins = 0;
document.getElementById("win-cont").innerHTML = wins;
console.log(wins);

var losses = 0;
document.getElementById("loss-cont").innerHTML = losses;
console.log(losses);

var guessLimit = 10;
document.getElementById("guess").innerHTML = guessLimit;
console.log(guessLimit);
var selectedChoice = new Array();


document.onkeyup = function () {
var playerGuess = event.key;
console.log = playerGuess; 

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

//Random guesses of letters
var randGuess = cpuLetters[Math.floor(Math.random() * cpuLetters.length)];

if(letters.indexOf(playerGuess) > -1){
//If letter is guessed correctly, then you win
	if (playerGuess === randGuess) { 
			alert("You win!")
			wins++;
			guessLimit = 10; 
			selectedChoice = [];
		}
//If the player's guess does not = computer's random guess, then a guess will be deducted
	else if (playerGuess != randGuess) { 
			alert("You lose!")
			playerGuess --;
			selectedChoice.push(playerGuess)
		}
//If player's guess limit runs out, then a loss will be accounted for. 
	else if (guessLimit === 0) {
			guessLimit = 10;
			losses --;
			selectedChoice = [];
			}
		}
}

