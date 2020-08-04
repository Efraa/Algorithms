// https://www.urionlinejudge.com.br/judge/en/problems/view/1171

const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
const numberOfTestCases = parseInt(input[0]);

const numberFrequence = () => {
  const numbers = [];
  let output = [];

  const setFrequence = (number) => {
    const num = parseInt(number);
    if (numbers.includes(num)) {
      const getNumber = output.filter(o => o.num === num)[0];
      const update = output.filter(o => o.num !== num);
      if (getNumber)
        getNumber.count = getNumber.count += 1;
      output = [];
      update.map(o => output.push(o));
      output.push(getNumber);
    } else {
      numbers.push(num);
      output.push({
        num: num,
        count: 1
      });
    }
  };

  for (let c = 1; c <= numberOfTestCases; c += 1) {
    setFrequence(input[c]);
  }

  output.sort((a, b) => a.num < b.num ? -1 : 1).map(val =>
    console.log(`${val.num} aparece ${val.count} vez(es)`));
};

numberFrequence();
