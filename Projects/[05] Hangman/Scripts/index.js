import hangmanWords from './answers.js';

let word, name, category, displayWord, wrongGuesses, guessedLetters;

document.addEventListener('DOMContentLoaded', () => {
	resetGame();
	printABC();
});

function resetGame() {
	word = randomizeWords();
	name = word.answer.toUpperCase();
	category = word.category;
	displayWord = [];
	wrongGuesses = 0;
	guessedLetters = new Set();

	for (let letter of name) {
		displayWord.push(letter === ' ' ? ' - ' : ' _ ');
	}
	printABC();
	updatePrint();
}

function randomizeWords() {
	let randomNumber = Math.floor(Math.random() * hangmanWords.length);
	console.log(hangmanWords[randomNumber]);
	return hangmanWords[randomNumber];
}

function updatePrint() {
	document.getElementById('word').innerText = displayWord.join(' ');
	document.getElementById('guesses').innerText = `Guesses Left: ${10 - wrongGuesses}`;
	document.getElementById('category').innerText = `Category: ${category}`;
}

window.check = function (key) {
	if (guessedLetters.has(key) || wrongGuesses >= 10) return;

	let correctGuess = false;

	// Check if the guessed letter is in the word
	for (let i = 0; i < name.length; i++) {
		if (name[i] === key) {
			displayWord[i] = name[i];
			correctGuess = true;
		}
	}

	// Add the key to the set of guessed letters
	guessedLetters.add(key);

	if (correctGuess) {
		document.getElementById(`letter-${key}`).classList.add('correct-guess');
	} else {
		// Increment wrong guesses only if the guess was incorrect
		wrongGuesses++;
		document.getElementById(`letter-${key}`).classList.add('wrong-guess');
	}

	// Update the display after each guess
	updatePrint();

	// Check for win
	if (displayWord.join('') === name) {
		setTimeout(() => {
			alert("Congratulations! You've guessed the word!");
			resetGame();
		}, 100);
	}

	// Check for game over
	if (wrongGuesses >= 10) {
		setTimeout(() => {
			alert("Game Over! You've run out of guesses.");
			resetGame();
		}, 100);
	}
};

function printABC() {
	const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	const lettersElement = document.getElementById('letters');
	lettersElement.innerHTML = ''; // Clear previous letters

	alphabet.split('').forEach((letter) => {
		// Reset the class for each letter square
		lettersElement.innerHTML += `<div class="letter-square" id="letter-${letter}" onclick="check('${letter}')">${letter}</div>`;
	});
}

export default { randomizeWords, resetGame, updatePrint, check, printABC };
