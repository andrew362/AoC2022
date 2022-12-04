import fs from 'fs';

const filePath = './4/file.txt';

const data = fs.readFileSync(filePath).toString();

const pairs = data.split('\n');

const pairsArr = pairs.map((pair) => pair.split(','));

let covers = 0;

pairsArr.forEach((pair) => {
  const first = pair[0].split('-').map((el) => +el);

  const second = pair[1].split('-').map((el) => +el);

  const base: number[] = Array(100).fill(0);
  const base1: number[] = Array(100).fill(0);
  const base2: number[] = Array(100).fill(0);

  base1.fill(1, first[0], first[1] + 1);
  base2.fill(2, second[0], second[1] + 1);

  const outcome = base.map((_, idx) => {
    return base1[idx] + base2[idx];
  });

  if (outcome.indexOf(3) !== -1) {
    covers++;
  }
});

console.log(covers); //answer
