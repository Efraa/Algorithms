// https://www.urionlinejudge.com.br/judge/en/problems/view/1007

const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');

// Parse Values
const ps = n => parseInt(n);

// Input values
const
  a = ps(input[0]),
  b = ps(input[1]),
  c = ps(input[2]),
  d = ps(input[3]);

console.log(`DIFERENCA = ${((a * b) - (c * d))}`);
