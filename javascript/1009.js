// https://www.urionlinejudge.com.br/judge/en/problems/view/1009

const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');

const employee = {
  name: input[0].toString(),
  salary: parseFloat(input[1]),
  sales: parseFloat(input[2])
};

const {
  salary,
  sales
} = employee;
const cal = (salary, sales, percentage = 0.15) => ((sales * percentage) + salary);

console.log(`TOTAL = R$ ${cal(salary, sales).toFixed(2)}`);
