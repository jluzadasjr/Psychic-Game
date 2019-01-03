// <!-- Set up variables -->

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

		 var wins = 0;
		 var losses = 0;
		 var numGuesses = 9;
		 var guessChoices = [];

		 document.onkeyup = function(event) {

		 	var userGuess = event.key;

		 	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

		 	var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
			 // Set up conditional statements
			 
			if (options.indexOf(userGuess) > -1) {
				// if you guess correctly, then you win
				if (userGuess === computerGuess) {
					wins++;
					numGuesses = 9;
					guessChoices = [];
				}
				// if guess does not equal computer's guess, then your guesses will be deducted.
				if (userGuess != computerGuess) {
					numGuesses --;
					guessChoices.push(userGuess);
				}
				// If guess equals 0, then you lose.
				if (numGuesses === 0) {

				numGuesses = 9;
				losses ++;
				guessChoices = [];

				
			}

			var html = 
			"<h1> The Psychic Game </h1>" +
			"<p>Guess what letter I'm thinking of!</p>" +
			"<p>Wins: " + wins + "</p>" +
			"<p>Losses: " + losses + "</p>" +
			"<p>Guesses Left: " + numGuesses + "</p>" +
			"<p>Your Guesses so far: " + guessChoices.join(", ") + "</p>";

			document.querySelector("#game").innerHTML = html;

			
			}
		};