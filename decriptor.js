var criptCreator = require('./cript-creator.js');
exports.decript = decrypt;

// decrypt("я", 2, 'юяа бвг');

function decrypt (word, number, text) {
	var decryptedText = "",
		alphabet = [],
		wordCodes = [],
		cript;

	alphabet = getAlphabetCodes('а', 'я');

	cript = criptCreator.getCript(alphabet, word, number);

	decryptedText = getDecryptedText(text, cript, getAlphabetCodes('а', 'я'));

	return decryptedText;
}

function getDecryptedText (text, cript, alphabet) {
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

		index = cript.indexOf(charCode);

		if (index >= 0) {
			newText += getChar(alphabet[index], isUpper);
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
