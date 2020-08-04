// https://www.urionlinejudge.com.br/judge/en/problems/view/1016

const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');

// Input value
const v = parseInt(input[0]);
const cal = (km, mnts = 2) => (km * mnts);

console.log(`${(cal(v))} minutos`);
