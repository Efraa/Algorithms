// https://www.urionlinejudge.com.br/judge/en/problems/view/1011

const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');

const R = parseFloat(input[0]);
const volume = (n, pi = 3.14159) => ((4 / 3.0) * pi * Math.pow(n, 3));

console.log(`VOLUME = ${volume(R).toFixed(3)}`);
