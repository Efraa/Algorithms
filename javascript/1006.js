// https://www.urionlinejudge.com.br/judge/en/problems/view/1006

const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');

// Parse Values
const ps = n => parseFloat(n).toFixed(1);

// Input values
const vals = {
  a: ps(input[0]),
  b: ps(input[1]),
  c: ps(input[2])
}

// sum weight
const weight = {
  a: 2,
  b: 3,
  c: 5
};

const {
  a,
  b,
  c
} = weight;
const sumWeight = (a + b + c);

// Average
const average = (_a, _b, _c) => ps(((_a * a) + (_b * b) + (_c * c)) / sumWeight);

console.log(`MEDIA = ${average(vals.a, vals.b, vals.c)}`);
