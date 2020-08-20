// https://www.urionlinejudge.com.br/judge/en/problems/view/1036

const input = require('fs').readFileSync('/dev/stdin', 'utf8').split(' ');

// Parse Values
const ps = n => parseFloat(n).toFixed(5);

// Input values
const vals = {
  a: ps(input[0]),
  b: ps(input[1]),
  c: ps(input[2])
}

// Square root
const square = n => Math.sqrt(n);

// BHASKARA’S FORMULA
const bhaskara = ({ a, b, c }, change = true) => 
  change ? ps( (-b + square(Math.pow(b, 2) - (4*(a)*(c)))) / (2*a) ) : 
  ps( (-b - square(Math.pow(b, 2) - (4*(a)*(c)))) / (2*a) );

const r1 = bhaskara(vals);
const r2 = bhaskara(vals, false);
if (Number(r1) && Number(r2))
  return console.log(`R1 = ${r1}\nR2 = ${r2}`);

console.log('Impossivel calcular');
