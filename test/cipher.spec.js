import { expect } from "chai";
import Cipher from '../scripts/cipher';

describe('alphabets', () => {

    it('has the English alphabet', () => {
        const expected = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        const actual = Cipher.alphabets.en;
        
        expect(actual).to.deep.equal(expected);
    });

    it('has the Polish alphabet', () => {
        const expected = ['A', 'Ą', 'B', 'C', 'Ć', 'D', 'E', 'Ę', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'Ł', 'M',
        'N', 'Ń', 'O', 'Ó', 'P', 'R', 'S', 'Ś', 'T', 'U', 'W', 'Y', 'Z', 'Ź', 'Ż'];
        const actual = Cipher.alphabets.pl;

        expect(actual).to.deep.equal(expected);
    });

    it('has the Bulgarian alphabet', () => {
        const expected = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р',
        'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ь', 'Ъ', 'Ю', 'Я'];
        const actual = Cipher.alphabets.bg;

        expect(actual).to.deep.equal(expected);
    });

    it('has the Japanese alphabet', () => {
        const expected = ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ', 'が', 'ぎ', 'ぐ', 'げ', 'ご', 'さ', 'し',
        'す', 'せ', 'そ', 'ざ', 'じ', 'ず', 'ぜ', 'ぞ', 'た', 'ち', 'つ', 'て', 'と', 'だ', 'ぢ', 'づ', 'で', 'ど', 'な', 'に', 'ぬ', 'ね', 'の', 'は', 'ひ', 'ふ', 'へ', 'ほ',
        'ば', 'び', 'ぶ', 'べ', 'ぼ', 'ぱ', 'ぴ', 'ぷ', 'ぺ', 'ぽ', 'ま', 'み', 'む', 'め', 'も', 'や', 'ゆ', 'よ', 'ら', 'り', 'る', 'れ', 'ろ', 'わ', 'を', 'ん'];
        const actual = Cipher.alphabets.jp;

        expect(actual).to.deep.equal(expected);
    });
});

describe('isUpperCase', () => {

    it('detects an upper case', () => {
        const actual = Cipher.isUpperCase('P');

        expect(actual).to.be.true;
    });

    it('detects a lower case', () => {
        const actual = Cipher.isUpperCase('g');

        expect(actual).to.be.false;
    });

    it('detects an upper case Japanese', () => {
        const actual = Cipher.isUpperCase('き');

        expect(actual).to.be.true;
    });
});

describe('determineLetterPosition', () => {

    it('finds A in the English alphabet', () => {
        const expected = 0;
        const actual = Cipher.determineLetterPosition('A', Cipher.alphabets.en);

        expect(actual).to.equal(expected);
    });

    it('finds a in the English alphabet', () => {
        const expected = 0;
        const actual = Cipher.determineLetterPosition('a', Cipher.alphabets.en);

        expect(actual).to.equal(expected);
    });

    it('does not find ż in the English alphabet', () => {
        const expected = -1;
        const actual = Cipher.determineLetterPosition('ż', Cipher.alphabets.en);

        expect(actual).to.equal(expected);
    });

    it('finds ą in the Polish alphabet', () => {
        const expected = 1;
        const actual = Cipher.determineLetterPosition('ą', Cipher.alphabets.pl);

        expect(actual).to.equal(expected);
    });
});
