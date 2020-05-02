const alphabets = {
	en: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
 	pl: ['A', 'Ą', 'B', 'C', 'Ć', 'D', 'E', 'Ę', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'Ł', 'M',
 'N', 'Ń', 'O', 'Ó', 'P', 'R', 'S', 'Ś', 'T', 'U', 'W', 'Y', 'Z', 'Ź', 'Ż'],
 	bg: ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р',
 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ь', 'Ъ', 'Ю', 'Я'],
 	jp: ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ', 'が', 'ぎ', 'ぐ', 'げ', 'ご', 'さ', 'し',
 'す', 'せ', 'そ', 'ざ', 'じ', 'ず', 'ぜ', 'ぞ', 'た', 'ち', 'つ', 'て', 'と', 'だ', 'ぢ', 'づ', 'で', 'ど', 'な', 'に', 'ぬ', 'ね', 'の', 'は', 'ひ', 'ふ', 'へ', 'ほ',
 'ば', 'び', 'ぶ', 'べ', 'ぼ', 'ぱ', 'ぴ', 'ぷ', 'ぺ', 'ぽ', 'ま', 'み', 'む', 'め', 'も', 'や', 'ゆ', 'よ', 'ら', 'り', 'る', 'れ', 'ろ', 'わ', 'を', 'ん']
};

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
	const chosenAlphabet = alphabets[language];
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