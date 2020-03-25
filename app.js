const alphabets = {
	en: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
 	pl: ['A', 'Ą', 'B', 'C', 'Ć', 'D', 'E', 'Ę', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'Ł', 'M',
 'N', 'Ń', 'O', 'Ó', 'P', 'R', 'S', 'Ś', 'T', 'U', 'W', 'Y', 'Z', 'Ź', 'Ż'],
 	bg: ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р',
 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ь', 'Ъ', 'Ю', 'Я'],
 	jp: ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ', 'が', 'ぎ', 'ぐ', 'げ', 'ご', 'さ', 'し',
 'す', 'せ', 'そ', 'ざ', 'じ', 'ず', 'ぜ', 'ぞ', 'た', 'ち', 'つ', 'て', 'と', 'だ', 'ぢ', 'づ', 'で', 'ど', 'な', 'に', 'ぬ', 'ね', 'の', 'は', 'ひ', 'ふ', 'へ', 'ほ',
 'ば', 'び', 'ぶ', 'べ', 'ぼ', 'ぱ', 'ぴ', 'ぷ', 'ぺ', 'ぽ', 'ま', 'み', 'む', 'め', 'も', 'や', 'ゆ', 'よ', 'Е', 'ら', 'り', 'る', 'れ', 'ろ', 'わ', 'を', 'ん']
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
			output.push(determineCipherLetter(char, currentPosition, shift, chosenAlphabet));
		}
	}
	const cipherText = output.join('');
	document.getElementById('output').value = cipherText;
};

const decode = () => {
	console.log('Decode button works!');
};

encodeButton.addEventListener('click', encode);
decodeButton.addEventListener('click', decode);
