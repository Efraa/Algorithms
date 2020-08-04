// https://www.urionlinejudge.com.br/judge/en/problems/view/1020

const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');

const ageInDays = (_days) => {
  const
    year = parseInt((_days / 365)),
    month = parseInt((_days - (year * 365)) / 30),
    days = parseInt(((_days - (year * 365)) - (month * 30)));

  console.log(`${year} ano(s)\n${month} mes(es)\n${days} dia(s)`);
};

ageInDays(input[0]);
