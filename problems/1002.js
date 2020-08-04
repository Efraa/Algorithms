// https://www.urionlinejudge.com.br/judge/en/problems/view/1002

const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');

const areaOfCircle = ({ n, r, p }) => (n* (Math.pow(r, p))).toFixed(4);
const n = 3.14159;
const r = parseFloat(input[0]);
const a = areaOfCircle({ n: n, r: r, p: 2 });
console.log(`A=${a}`);
