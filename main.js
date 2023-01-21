const options = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
	const choice = options[Math.floor(Math.random() * options.length)];
	return choice;
}

function checkWinner(playerSelection, computerSelection) {
	if (playerSelection == computerSelection) {
		return 'Tie';
	} else if (
		(playerSelection == 'rock' && computerSelection == 'scissors') ||
		(playerSelection == 'paper' && computerSelection == 'rock') ||
		(playerSelection == 'scissors' && computerSelection == 'paper')
	) {
		return 'Player';
	} else {
		return 'Computer';
	}
}

function playRound(playerSelection, computerSelection) {
	const result = checkWinner(playerSelection, computerSelection);
	if (result == 'Tie') {
		return "It's a Tie!";
	} else if (result == 'Player') {
		return 'You Win!';
	} else {
		return 'You lose';
	}
}

function getPlayerChoice() {
	let validateInput = false;
	while (validateInput == false) {
		const choice = window.prompt('Rock,Papper,Scissors');
		if (choice == null) {
			continue;
		}
		const choiceLowerCase = choice.toLowerCase();
		if (options.includes(choiceLowerCase)) {
			validateInput = true;
			return choiceLowerCase;
		}
	}
}

function game() {
	let playerScore = 0;
	let computerScore = 0;
	console.log('Welcome');
	for (let i = 0; i < 5; i++) {
		const playerSelection = getPlayerChoice();
		const computerSelection = getComputerChoice();
		console.log(playRound(playerSelection, computerSelection));
		console.log('----------');
		if (checkWinner(playerSelection, computerSelection) == 'Player') {
			playerScore++;
		} else if (checkWinner(playerSelection, computerSelection) == 'Computer') {
			computerScore++;
		}
	}
	console.log('Game Over');
	if (playerScore > computerScore) {
		console.log('Player is the Winner!');
	} else if (playerScore < computerScore) {
		console.log('Computer is the Winner!');
	}
}

game();
