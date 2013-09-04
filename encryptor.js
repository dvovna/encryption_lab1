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
	// console.log(alphabet);

	return encryptedText;
}

function getEncryptedText (text, cript, alphabet) {
	var encriptedText = '';

	for (var i in text) {
		var code = alphabet.indexOf(text[i].charCodeAt(0));
		console.log(code);
		if (!code) { console.log('false');return; }
		
		text = text.replace(text[i], String.fromCharCode(cript[code]));
		console.log(text.replace(text[i], String.fromCharCode(cript[code])));
	}

	return text;
}

function insertWordToArray (array, codes, index) {
	var ind = '';
	
	array = codes.concat(array);

	ind = array.length - index;

	head = array.splice(ind, codes.length);

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
	for (var i = start.charCodeAt(0); i < end.charCodeAt(0); i++) {
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

encrypt(2, "фыв", "цук");	