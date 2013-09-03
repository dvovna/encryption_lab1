var fs = require("fs");
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

var file = fs.openSync('normal-text.txt', 'r');


var number = 0;
var word = "";

function initialize () {
	askForWord();
}

function askForWord () {
	rl.question("Enter a word: ", onWordEntered);
}

function askForNumber () {
	rl.question("Enter a number: ", onNumberEntered);
}

function onWordEntered (text) {
	if (!checkText(text)) {
		askForWord();
		return;
	};
	
	console.log("\n---acceptable---\n");

	word = text;

	rl.close();

	askForNumber();
}

function onNumberEntered (text) {
	if (!checkText(text)) {
		askForNumber();
		return;
	};

	console.log("\n---acceptable---\n");
	
	number = text;
	
	rl.close();
}

function checkText (text) {
	if (!text.trim()) {
		console.log("Enter correct data!! \n");
		return false;
	}
	return true;
}



initialize();