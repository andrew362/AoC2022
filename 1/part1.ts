import fs from 'fs';

const filePath = './1/file.txt';

const data = fs.readFileSync(filePath).toString();

const elves = data.split('\n\n');

const elvesMap = elves.map((elv) => {
  const arr = elv.split('\n');
  return arr
    .map((ar) => +ar)
    .reduce((prev, cur) => (prev = prev + cur), 0);
});

let maxElv = 0;
let maxIdx = 0;
elvesMap.forEach((elv, idx) => {
  if (elv > maxElv) {
    maxElv = elv;
    maxIdx = idx;
  }
});

const elvesSortMax = elvesMap.sort(
  (el1, el2) => -el1 + el2
);

console.log(maxIdx); // answer
