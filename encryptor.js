/*
Should accept a word and a number, 
should generate a cipher
*/
exports.encrypt = encrypt;

var criptCreator = require('./cript-creator.js');

function encrypt (number, word, text) {
	var encryptedText = "",
		alphabet = [],
		wordCodes = [],
		cript;

	alphabet = getAlphabetCodes('а', 'я');

	cript = criptCreator.getCript(alphabet, word, number);

	encryptedText = getEncryptedText(text, cript, getAlphabetCodes('а', 'я'));
	console.log(encryptedText);
	return encryptedText;
}

function getEncryptedText (text, cript, alphabet) {
	var newText = '';
	for (var i in text) {
		var key = text[i],
			charCode = key.charCodeAt(0),
			index = 0,
			isUpper = false;

		if (charCode >= 1040 && charCode <= 1071) {
			key = key.toLowerCase();
			charCode = key.charCodeAt(0);
			isUpper = true;
		}
		console.log(key, alphabet.indexOf(charCode));
		index = alphabet.indexOf(charCode);

		if (index >= 0) {
			newText += getChar(cript[index], isUpper);
		} else {
			newText += getChar(charCode, isUpper);
		}
	}
	return newText;
}


function getChar (code, isUpper) {
	var charr = String.fromCharCode(code);

	charr = isUpper ? charr.toUpperCase() : charr;

	return charr;
}

function getAlphabetCodes (start, end) {
	var mass = [];
	for (var i = start.charCodeAt(0); i <= end.charCodeAt(0); i++) {
		mass.push(i);
	}
	return mass;
}
