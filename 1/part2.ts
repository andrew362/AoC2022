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

elvesMap.forEach((elv, idx) => {
  if (elv > maxElv) {
    maxElv = elv;
  }
});

const elvesSortMax = elvesMap.sort(
  (el1, el2) => -el1 + el2
);

const maxElves = elvesSortMax.slice(0, 3);

const out = maxElves.reduce(
  (prev, next) => (prev += next),
  0
);

console.log(out); //answer
