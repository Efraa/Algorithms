// https://www.urionlinejudge.com.br/judge/en/problems/view/2987

const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('');
const getLetter = (letter) => ALPHABET.indexOf(letter.toLowerCase()) + 1;
const L = getLetter(input[0]);
console.log(L);
