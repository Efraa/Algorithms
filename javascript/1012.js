// https://www.urionlinejudge.com.br/judge/en/problems/view/1012

const input = require('fs').readFileSync('/dev/stdin', 'utf8').split(' ');

const a = parseFloat(input[0]),
  b = parseFloat(input[1]),
  c = parseFloat(input[2]);
const strings = ['TRIANGULO', 'CIRCULO', 'TRAPEZIO', 'QUADRADO', 'RETANGULO'];

const areaOfTriangle = (base, height) => ((base * height) / 2);
const areaOfCircle = (radio, pi = 3.14159) => (pi * Math.pow(radio, 2));
const areaOfTrapezium = (Base, base, height) => (((Base + base) * height) / 2);
const areaOfSquare = side => (Math.pow(side, 2));
const areaOfRectangle = (base, height) => (base * height);

const cals = [
  areaOfTriangle(a, c),
  areaOfCircle(c),
  areaOfTrapezium(a, b, c),
  areaOfSquare(b),
  areaOfRectangle(a, b)
];

strings.forEach((string, i) => console.log(`${string}: ${cals[i].toFixed(3)}`));
