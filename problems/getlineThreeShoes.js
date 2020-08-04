// https://www.urionlinejudge.com.br/judge/en/problems/view/1218

const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
let numberOfTestsCases = 0;
const mapPairs = box => {
  let count = 0;
  const mapped = [];
  box.map((val, i) => {
    if (Number(val))
      mapped.push({
        size: val,
        type: box[count + 1]
      });
 
    count = i + 1;
  });
  return mapped;
};
 
const getMatched = (pairs, size) => {
  const checked = [];
  let output = [];
  pairs.map(pair => {
    const contains = (obj, list, size) =>
      list.some(i => obj.size === size && i.size === obj.size && i.type === obj.type);

    if (contains(pair, checked, size)) {
      const getPair = output.filter(p => p.size === pair.size && p.type === pair.type)[0];
      const update = output.filter(p => p.type !== pair.type);
      getPair.equal += 1;
      if (pair.type === 'M') getPair.m += 1;
      else getPair.f += 1;

      output = [...update, getPair];
    } else if (pair.size === size) {
      checked.push(pair);
      output.push({
        equal: 1,
        f: pair.type === 'F' ? 1 : 0,
        m: pair.type === 'M' ? 1 : 0,
        type: pair.type,
        size: pair.size
      });
    }
  });

  return output.reduce((prev, current) => ({ 
    equal: prev.equal + current.equal,
    m: prev.m + current.m,
    f: prev.f + current.f
  }));
};
 
const getShoesBySizes = ({ id, size, box }) => {
  const pairs = mapPairs(box);
  const data = getMatched(pairs, size);
  console.log(`Caso ${id}:\nPares Iguais: ${data.equal}`);
  console.log(`F: ${data.f}\nM: ${data.m}\n`);
};

for (let testCase = numberOfTestsCases; testCase < input.length; testCase += 2) {
  getShoesBySizes({
    id: numberOfTestsCases += 1,
    size: input[testCase].trim(),
    box: input[testCase + 1].trim().split(' ')
  });
}