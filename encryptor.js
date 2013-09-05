/*
Should accept a word and a number, 
should generate a cipher
*/
exports.encrypt = encrypt;


function encrypt (number, word, text) {
	var encryptedText = "",
		alphabet = [],
		wordCodes = [],
		cript;

	alphabet = getAlphabetCodes('а', 'я');
	cript = getAlphabetCodes('а', 'я')
	wordCodes = getCodesMass(word);

	removeWordCodesFromAplh(cript, wordCodes);

	cript = insertWordToArray(cript, wordCodes, number);
	encryptedText = getEncryptedText(text, cript, alphabet);

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

function insertWordToArray (array, word, index) {
	var ind = '';

	array = word.concat(array);

	ind = array.length - index + 1;

	head = array.splice(ind, word.length);

	array = head.concat(array);

	return array;
}

function removeWordCodesFromAplh (mass, codes) {
	var index = 0;
	for (var i in codes) {
		index = mass.indexOf(codes[i]);
		mass.splice(index, 1);
	}
}

function getAlphabetCodes (start, end) {
	var mass = [];
	for (var i = start.charCodeAt(0); i <= end.charCodeAt(0); i++) {
		mass.push(i);
	}
	return mass;
}

function getCodesMass (word) {
	var mass = [];
	for (var index in word) {
		mass.push(word.charCodeAt(index));
	}
	return mass;
}
