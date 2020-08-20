// https://www.urionlinejudge.com.br/judge/en/problems/view/2862

const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
const numberOfTestCases = parseInt(input[0]);

for (let c = 1; c <= numberOfTestCases; c += 1) {
  const _case = parseInt(input[c]);
  const output = _case <= 8000 ? 'Inseto!' : 'Mais de 8000!';
  console.log(output);
}
