// https://www.urionlinejudge.com.br/judge/en/problems/view/1387

const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');

const ps = n => parseInt(n);
const sum = ({ L, R }) => (L+R) > 0 && console.log(L + R);

input.map(counts => {
  const LR = counts.split(' ');
  sum({ L: ps(LR[0]), R: ps(LR[1]) });
});
