var fs = require("fs");
var readline = require('readline');
var encryptor = require('./encryptor.js');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

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
	if (!checkTextForNull(text)) {
		askForWord();
		return;
	};

	console.log("\n---acceptable---\n");

	word = text;

	askForNumber();
}

function onNumberEntered (text) {
	if (!checkTextForNull(text)) {
		askForNumber();
		return;
	};

	console.log("\n---acceptable---\n");

	number = text;

	askForEncrypting();
}

function askForEncrypting () {
	rl.question("Should I encrypt all the text in text.txt file? (Y/N)", onAnswer)
}

function onAnswer (key) {
	if (key == 'Y' || key == 'y') {
		startEncrypting();
	} else {
		rl.close();
	}
}

function startEncrypting () {
	var text = fs.openSync('text.txt', 'r'),
		encryptedText = "";
	
	try {
		encryptedText = encryptor.encrypt(number, word, text);
	} catch (err) {
		console.log(err + "\n");
		askForWord();
	}
}

function checkTextForNull (text) {
	if (!text.trim()) {
		console.log("Enter correct data!! \n");
		return false;
	}
	return true;
}


initialize();