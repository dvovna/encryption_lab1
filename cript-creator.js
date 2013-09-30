exports.getCript = getCript;

function getCript (alph, word, number) {
	var cript,
		wordCodes;

	cript = alph;

	wordCodes = getCodesMass(word);

	removeWordCodesFromAplh(cript, wordCodes);

	cript = insertWordToArray(cript, wordCodes, number);

	return cript;
}

function getCodesMass (word) {
	var mass = [];
	for (var index in word) {
		mass.push(word.charCodeAt(index));
	}
	return mass;
}

function removeWordCodesFromAplh (mass, codes) {
	var index = 0;
	for (var i in codes) {
		index = mass.indexOf(codes[i]);
		mass.splice(index, 1);
	}
}

function insertWordToArray (array, word, index) {
	var ind = '';

	array = word.concat(array);

	ind = array.length - index + 1;

	head = array.splice(ind, word.length);

	array = head.concat(array);

	return array;
}
