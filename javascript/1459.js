// https://www.urionlinejudge.com.br/judge/en/problems/view/1459

const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
const objectsInScene = Number(input[0]);

// Set and format Data
const setData = (data) => {
  const contains = (obj, list) =>
    list.some(elem => obj.A === elem.A && obj.B === elem.B);
  const output = [];
  const mapData = data.map(interval => ({
    A: Number(interval.split(' ')[0]),
    B: Number(interval.split(' ')[1])
  })).sort((intA, intB) => intA.A > intB.A ? 1 : -1);
  mapData.map(c => !contains(c, output) && output.push(c));
  return output;
};
const capturedObjects = (intervals, objectsScene) => {
  let captures = 0;
  let count = 0;
  intervals.map(interval => {
    console.log(interval);
    // while ()
  });
};
const howManyPhotosToTake = (object) => {
  const data = [];
  for (let index = 1; index <= object; index += 1) {
    data.push(input[index].trim());
  }
  const intervals = setData(data);
  capturedObjects(intervals, object);
};
howManyPhotosToTake(objectsInScene);
