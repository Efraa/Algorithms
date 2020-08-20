// https://www.urionlinejudge.com.br/judge/en/problems/view/1019

const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');

const getTimeFromSeconds = (_seconds) => {
  const
    hours = parseInt((_seconds / 60) / 60),
    minutes = parseInt((_seconds / 60) % 60),
    seconds = parseInt((_seconds - (hours * 60)) % 60);

  console.log(`${hours}:${minutes}:${seconds}`);
};

getTimeFromSeconds(parseInt(input[0]));
