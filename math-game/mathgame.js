var prompt = require('sync-prompt').prompt;

var player1 = 0;
var player2 = 1;
var lives = [3, 3];
var turn = player1;

var num1
var num2
var opIndex = 0;
var operators = ["+", "-", "*", "/"];

gameLoop();


function minusLife() {
	if (turn == player1) {
		lives[player1] -= 1;
	}else{
		lives[player2] -= 1;
	}
}

function changeTurn() {
	if (turn == player1) {
		turn = player2;
	} else {
		turn = player1;
	}
}

function randomNumbers() {
	num1 = Math.floor((Math.random()*20)+1);
	num2 = Math.floor((Math.random()*20)+1);
	opIndex = Math.floor((Math.random()*4));
}

function questionAnswer() {
	return prompt("Player" + (turn + 1) + ":" + " what is " + num1 + " " + operators[opIndex] + " " + num2);
}

function correct(answer) {
	if ( ( (num1 + num2) == answer) && (opIndex == 0) ) {
		return true;
	} else if ( ( (num1 - num2) == answer) && (opIndex == 1) ) {
		return true;
	} else if ( ( (num1 * num2) == answer) && (opIndex == 2) ) {
		return true;
	} else if ( ( (num1 / num2) == answer) && (opIndex == 3) ) {
		return true;
	} else {
		return false;
	}
}

function gameLoop() {
	while(lives[player1] > 0 && lives[player2] > 0) {
		randomNumbers();
		var answer = questionAnswer();

		if (correct(answer)) {
			console.log("You're a math whiz!");
		} else {
			minusLife();
			console.log("Wrong! You only have " + lives[turn] + " lives left");
		}

		changeTurn();
	}
}



