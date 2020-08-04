// https://www.urionlinejudge.com.br/judge/en/problems/view/1129

const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
const ps = n => parseInt(n);
let numberOfTestCases = 0;

const scanSheet = rows => {
  const responses = ['A', 'B', 'C', 'D', 'E'];
  const isMarked = grayScale => grayScale <= 127 ? true : false;

  const responseIsValid = r => {
    let data = [];
    const columns = input[r].split(' ');
    columns.map((scale, i) => {
      if (isMarked(ps(scale)))
        data.push({
          res: responses[i],
          id: ps(scale)
        });
    });

    const output = data.length === 1 ? data[0].res : '*';
    console.log(output);
  };

  for (let row = (numberOfTestCases + 1); row <= (rows + numberOfTestCases); row += 1) {
    responseIsValid(row);
  }
};

do {
  scanSheet(ps(input[numberOfTestCases]));
  numberOfTestCases += ps(input[numberOfTestCases]) + 1;
} while (input[numberOfTestCases]);
