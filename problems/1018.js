// https://www.urionlinejudge.com.br/judge/en/problems/view/1018

const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
const val = parseFloat(input[0]);

let remainder = 0;
const notes = [100, 50, 20, 10, 5, 2, 1];

const cal = (amount, nota) => amount >= nota ? parseInt(amount / nota) : 0;

// Register
const record = (n, name, amount = parseFloat(remainder)) => {
  const item = {
    name: `${n},00`,
    amount: cal(amount, n)
  };
  remainder = (amount - (cal(amount, n) * n)).toFixed(2);
  console.log(`${item.amount} ${name}(s) de R$ ${item.name}`);
};

// Records of notes
console.log(val);
notes.map(n => n === notes[0] ? record(n, 'nota', val) : record(n, 'nota'));
