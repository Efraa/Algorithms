// https://www.urionlinejudge.com.br/judge/en/problems/view/1035

const input = require('fs').readFileSync('/dev/stdin', 'utf8').split(' ');

const ps = n => parseInt(n);
const a = ps(input[0]),
  b = ps(input[1]),
  c = ps(input[2]),
  d = ps(input[3]);

const output = b > c && d > a && (c + d) > (a + b) && (c + d) > 1 && a % 2 === 0 ?
  'Valores aceitos' : 'Valores nao aceitos';

console.log(output);
