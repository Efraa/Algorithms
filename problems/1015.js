// https://www.urionlinejudge.com.br/judge/en/problems/view/1015

const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');

const vals = [
  input[0].split(' '),
  input[1].split(' ')
];

const
  x1 = parseFloat(vals[0][0]),
  y1 = parseFloat(vals[0][1]),
  x2 = parseFloat(vals[1][0]),
  y2 = parseFloat(vals[1][1]);

const distance = () =>
  console.log(Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2)).toFixed(4));

distance();
