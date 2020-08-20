// https://www.urionlinejudge.com.br/judge/en/problems/view/1005

const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');

// Parse Values
const ps = n => parseFloat(n).toFixed(5);

// Input values
const vals = {
  a: ps(input[0]),
  b: ps(input[1])
};

// sum weight
const weight = {
  a: 3.5,
  b: 7.5
};

const {
  a,
  b
} = weight;
const sumWeight = (a + b);

// Average
const average = (_a, _b) => ps(((_a * a) + (_b * b)) / sumWeight);

console.log(`MEDIA = ${average(vals.a, vals.b)}`);
