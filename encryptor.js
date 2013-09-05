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

	console.log("Encrypted", encryptedText);

	return encryptedText;
}

function getEncryptedText (text, cript, alphabet) {
	for (var i in text) {
		var key = text[i],
			charCode = key.charCodeAt(0),
			index = 0,
			isUpper = false;

		if (charCode >= 1040 && charCode <= 1071) {
			key.toLowerCase();
			charCode = key.charCodeAt(0);
			isUpper = true;
		}

		index = alphabet.indexOf(charCode);

		if (index >= 0) {
			text = text.replace(key, getChar(cript[index], isUpper));
		}
	}
	return text;
}


function getChar (code, isUpper) {
	var char = String.fromCharCode(code);

	char = isUpper ? char.toUpperCase() : char;
	
	return char;
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

encrypt(3, "аяв", "А бв");
