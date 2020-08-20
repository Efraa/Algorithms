// https://www.urionlinejudge.com.br/judge/en/problems/view/1003

const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');

const A = parseInt(input[0]);
const B = parseInt(input[1]);
const SOMA = (A + B);
console.log(`SOMA = ${SOMA}`);
