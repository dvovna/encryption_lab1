var fs = require("fs");
var readline = require('readline');
var encryptor = require('./encryptor.js');
var decriptor = require('./decriptor.js');

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

	startEncrypting();
}

function onAnswer (key) {
	if (key.toLowerCase() == 'y') {
		startEncrypting();
	} else {
		rl.close();
	}
}

function startEncrypting () {
	fs.readFile('text.txt', 'utf8',
		function (err, data) {
			if (err) { return console.log(err); }
			encryptedText = encryptor.encrypt(number, word, data);
			writeOutputFile(encryptedText);
		}
	);
}

function writeOutputFile (data) {
	fs.writeFile('encrypted.txt', data);
	console.log('DONE');

	askForDecription();
}

function askForDecription () {
	rl.question("Decript?", onDectiptionAnswer);	
}

function onDectiptionAnswer (text) {
	startDecription();
}
function startDecription () {
	var decryptedText;
	fs.readFile('encrypted.txt', 'utf8',
		function (err, data) {
			if (err) { return console.log(err); }
			decryptedText = decriptor.decript(word, number, data);
			console.log(decryptedText);
			writeDecriptedFile(decryptedText);
		}
	);
}
function writeDecriptedFile (data) {
	fs.writeFile('decrypted.txt', data);
	console.log('DONE');
	rl.close();
}

function checkTextForNull (text) {
	if (!text.trim()) {
		console.log("Enter correct data!! \n");
		return false;
	}
	return true;
}

initialize();
