// https://www.urionlinejudge.com.br/judge/en/problems/view/2922

const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n').map(entry => entry.split(' '));
const classrooms = (a, b) =>
  console.log((a !== b) ? (a > b) ? (a - b) - 1 : (b - a) - 1 : 0);
  
input.forEach(val => classrooms(Number(val[0]), Number(val[1])));
