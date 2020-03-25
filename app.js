const alphabets = {
	en: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
 	pl: [],
 	bg: []
};

const encodeButton = document.getElementById('encode');
const decodeButton = document.getElementById('decode');

const isUpperCase = (letter) => {
	return letter === letter.toUpperCase();
};

const determineLetterPosition = (letter, alphabet) => {
	return alphabet.indexOf(letter.toUpperCase());
};

const determineCipherLetter = (letter, currentPosition, shift, alphabet) => {
	const numberOfLetters = alphabet.length;
	const cipherLetterposition = currentPosition + shift;
	const index = cipherLetterposition % numberOfLetters;
	if (isUpperCase(letter)) {
		return alphabet[index];
	} else {
		return alphabet[index].toLowerCase();
	}
};

encodeButton.addEventListener('click', () => {
	const input = document.getElementById('input').value;
	const shift = parseInt(document.getElementById('shift').value);
	const language = document.getElementById('language').value;
	const chosenAlphabet = alphabets[language];
	let output = [];

	for (let char of input) {
		const currentPosition = determineLetterPosition(char, chosenAlphabet);
		if (currentPosition === -1) {
			output.push(char);
		} else {
			output.push(determineCipherLetter(char, currentPosition, shift, chosenAlphabet));
		}
	}
	const cipherText = output.join('');
	document.getElementById('output').value = cipherText;
});

decodeButton.addEventListener('click', () => {
	console.log('decodeButton was clicked!');
});
