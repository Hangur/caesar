import Cipher from './cipher';

const encodeButton = document.getElementById('encode');
const decodeButton = document.getElementById('decode');
const input = document.getElementById('input');
let activeMode = 'encode';

const makePrimary = (button) => {
	button.classList.add('btn-primary');
	button.classList.remove('btn-secondary');
};

const makeSecondary = (button) => {
	button.classList.add('btn-secondary');
	button.classList.remove('btn-primary');
};

const flip = (event) => {
	const buttonThatWasClicked = event.target;
	if (buttonThatWasClicked === encodeButton) {
		makePrimary(encodeButton);
		makeSecondary(decodeButton);
		activeMode = 'encode';
	} else {
		makePrimary(decodeButton);
		makeSecondary(encodeButton);
		activeMode = 'decode';
	}
};

const pressEnter = (event) => {
	if (event.keyCode === 13) {
		if (activeMode === 'encode') {
			encode();
		} else {
			decode();
		}
	}
};

const isUpperCase = (letter) => {
	return letter === letter.toUpperCase();
};

const determineLetterPosition = (letter, alphabet) => {
	return alphabet.indexOf(letter.toUpperCase());
};

const determineLetter = (letter, currentPosition, shift, alphabet, encode) => {
	const numberOfLetters = alphabet.length;
	let letterPosition;
	if (encode === true) {
		letterPosition = currentPosition + shift;
	} else {
		letterPosition = currentPosition - shift;
		if (letterPosition < 0) {
			letterPosition = letterPosition + numberOfLetters;
		}
	}
	const index = letterPosition % numberOfLetters;
	if (isUpperCase(letter)) {
		return alphabet[index];
	} else {
		return alphabet[index].toLowerCase();
	}
};

const encode = () => {
	const input = document.getElementById('input').value;
	const shift = parseInt(document.getElementById('shift').value);
	const language = document.getElementById('language').value;
	const chosenAlphabet = Cipher.alphabets[language];
	let output = [];

	for (let char of input) {
		const currentPosition = determineLetterPosition(char, chosenAlphabet);
		if (currentPosition === -1) {
			output.push(char);
		} else {
			output.push(determineLetter(char, currentPosition, shift, chosenAlphabet, true));
		}
	}
	const cipherText = output.join('');
	document.getElementById('output').value = cipherText;
};

const decode = () => {
	const input = document.getElementById('input').value;;
	const shift = parseInt(document.getElementById('shift').value);
	const language = document.getElementById('language').value;
	const chosenAlphabet = alphabets[language];
	let output = [];

	for (let char of input) {
		const currentPosition = determineLetterPosition(char, chosenAlphabet);
		if (currentPosition === -1) {
			output.push(char);
		} else {
			output.push(determineLetter(char, currentPosition, shift, chosenAlphabet, false));
		}
	}
	const cipherText = output.join('');
	document.getElementById('output').value = cipherText;
};

encodeButton.addEventListener('click', encode);
encodeButton.addEventListener('click', flip);

decodeButton.addEventListener('click', decode);
decodeButton.addEventListener('click', flip);

input.addEventListener('keyup', pressEnter);