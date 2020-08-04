// https://www.urionlinejudge.com.br/judge/en/problems/view/1021

const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
const val = parseFloat(input[0]);

let remainder = 0;
const notes = [100, 50, 20, 10, 5, 2];
const coins = [1, 0.50, 0.25, 0.10, 0.05, 0.01];

const cal = (amount, nota) => amount >= nota ? parseInt(amount / nota) : 0;

// Register
const record = (n, name, amount = parseFloat(remainder)) => {
  const item = {
    name: (n).toFixed(2),
    amount: cal(amount, n)
  };
  remainder = (amount - (cal(amount, n) * n)).toFixed(2);
  console.log(`${item.amount} ${name}(s) de R$ ${item.name}`);
};

// Records of notes
console.log('NOTAS:');
notes.map(n => n === notes[0] ? record(n, 'nota', val) : record(n, 'nota'));

// Records of coins
console.log('MOEDAS:');
coins.map(n => record(n, 'moeda'));
