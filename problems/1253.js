// https://www.urionlinejudge.com.br/judge/en/problems/view/1253

const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
const numberOfTestCases = parseInt(input[0]) * 2;

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('');
const getLetter = letter => ALPHABET.indexOf(letter.toLowerCase());

const getIndiceFromString = (string) =>
  string.split('').map(s => getLetter(s.toLowerCase()));

const caesarCipher = (string, difference) => {
  const indices = getIndiceFromString(string);
  const decode = indices.map(indice => {
    let charCode = (indice - difference);
    if (charCode > ALPHABET.length) charCode -= ALPHABET.length;
    if (charCode < 0) charCode += ALPHABET.length;

    return ALPHABET[charCode];
  }).join('');

  console.log(decode.toUpperCase());
};

for (let c = 1; c <= numberOfTestCases; c += 2) {
  const string = input[c].toString().trim();
  const difference = parseInt(input[c + 1]);
  caesarCipher(string, difference);
}
