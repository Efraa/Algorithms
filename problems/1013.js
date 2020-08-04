// https://www.urionlinejudge.com.br/judge/en/problems/view/1013

const input = require('fs').readFileSync('/dev/stdin', 'utf8').split(' ');

const
  a = parseInt(input[0]),
  b = parseInt(input[1]),
  c = parseInt(input[2]);

const majorAB = (a, b) => ((a + b + Math.abs(a - b)) / 2);
const ab = majorAB(a, b);
const abc = majorAB(ab, c);

console.log(`${abc} eh o maior`);
