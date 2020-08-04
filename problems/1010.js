// https://www.urionlinejudge.com.br/judge/en/problems/view/1010

const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');

// Parse Values
const ps = (n, f = false) => !f ? parseInt(n) : parseFloat(n);

// Input values
const prods = [
  input[0].split(' '),
  input[1].split(' ')
];
const amounts = {
  a: ps(prods[0][1]),
  b: ps(prods[1][1])
};

const prices = {
  a: ps(prods[0][2], true),
  b: ps(prods[1][2], true)
};

const cal = (amount, price) => (amount * price);

console.log(`VALOR A PAGAR: R$ ${(cal(amounts.a, prices.a) + cal(amounts.b, prices.b)).toFixed(2)}`);
