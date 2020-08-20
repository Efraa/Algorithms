// https://www.urionlinejudge.com.br/judge/en/problems/view/1038

const input = require('fs').readFileSync('/dev/stdin', 'utf8').split(' ');
const table = [
  {
    code: 1,
    price: 4.00,
  },
  {
    code: 2,
    price: 4.50,
  },
  {
    code: 3,
    price: 5.00,
  },
  {
    code: 4,
    price: 2.00,
  },
  {
    code: 5,
    price: 1.50,
  },
];

const getProd = code => table.filter(prod => prod.code === code);
const X = parseInt(input[0]);
const Y = parseInt(input[1]);
const P = parseFloat(getProd(X)[0].price);
console.log(`Total: R$ ${(P*Y).toFixed(2)}`);
