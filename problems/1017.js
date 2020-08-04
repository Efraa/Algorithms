// https://www.urionlinejudge.com.br/judge/en/problems/view/1017

const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');

const fuelSpent = ({
  hours,
  km,
  v
}) =>
console.log(((km * hours) / v).toFixed(3));

fuelSpent({
  hours: parseInt(input[0]),
  km: parseInt(input[1]),
  v: 12
});
