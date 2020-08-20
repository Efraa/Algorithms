// https://www.urionlinejudge.com.br/judge/en/problems/view/1037

const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
const intervals = [
  {
    min: 0,
    max: 25
  },
  {
    min: 25,
    max: 50
  },
  {
    min: 50,
    max: 75
  },
  {
    min: 75,
    max: 100
  }
];
const getInterval = (value) =>
  intervals.filter((interval) => {
    const min = parseFloat(interval.min.toFixed(5));
    const max = parseFloat(interval.max.toFixed(5));
    return min <= value && max >= value;
  });

const value = getInterval(parseFloat(input.shift()))[0];
if (!value) return console.log('Fora de intervalo');

const openOrClosed = value.min !== 0 ? '(' : '[';

console.log(`Intervalo ${openOrClosed}${value.min},${value.max}]`);
