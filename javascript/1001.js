// https://www.urionlinejudge.com.br/judge/en/problems/view/1001

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').split('\n');

const sum = ({ a, b }) => console.log(`X = ${(a + b)}`);
const a = parseInt(input[0]);
const b = parseInt(input[1]);

sum({ a, b });
