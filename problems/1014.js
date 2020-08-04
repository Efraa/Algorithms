// https://www.urionlinejudge.com.br/judge/en/problems/view/1014

const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');

// Input value
const x = parseInt(input[0]);
const y = parseFloat(input[1]);
const cal = (km, fuel) => (km / fuel);

console.log(`${(cal(x, y)).toFixed(3)} km/l`);
