// https://www.urionlinejudge.com.br/judge/en/problems/view/1008

const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');

const employee = {
  id: parseInt(input[0]),
  hours: parseInt(input[1]),
  salary: parseFloat(input[2])
};

const {
  id,
  hours,
  salary
} = employee;
const cal = (salary, hours) => (salary * hours);

console.log(`NUMBER = ${id}\nSALARY = U$ ${cal(salary, hours).toFixed(2)}`);
