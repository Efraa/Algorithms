// https://www.urionlinejudge.com.br/judge/en/problems/view/1004

const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
console.log(`PROD = ${parseInt(input[0]) * parseInt(input[1])}`);
