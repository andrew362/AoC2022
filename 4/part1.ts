import fs from 'fs';

const filePath = './4/file.txt';

const data = fs.readFileSync(filePath).toString();

const pairs = data.split('\n');

const pairsArr = pairs.map((pair) => pair.split(','));

let covers = 0;

pairsArr.forEach((pair) => {
  const first = pair[0].split('-').map((el) => +el);
  const firstLength = first[1] - first[0];

  const second = pair[1].split('-').map((el) => +el);
  const secondLength = second[1] - second[0];

  const base = Array(1000).fill('-');

  if (firstLength < secondLength) {
    base.fill(1, first[0], first[1] + 1);
    base.fill(2, second[0], second[1] + 1);
  } else {
    base.fill(2, second[0], second[1] + 1);
    base.fill(1, first[0], first[1] + 1);
  }

  const set = new Set();

  base.forEach((el) => {
    if (el !== '-') {
      set.add(el);
    }
  });

  if (set.size === 1) {
    covers++;
  }
});

console.log(covers); //answer
