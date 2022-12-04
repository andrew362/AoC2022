import fs from 'fs';

const filePath = './3/file.txt';

const data = fs.readFileSync(filePath).toString();

const packs = data.split('\n');

const groups = [];

packs.forEach((pack, idx) => {
  if ((idx + 1) % 3 === 0) {
    groups.push(packs.slice(idx - 2, idx + 1));
  }
});

const packsWithComp = groups.map((group) => {
  const shares = new Set();

  [...group[0]].forEach((letter1) => {
    [...group[1]].forEach((letter2) => {
      if (letter1 === letter2) {
        shares.add(letter2);
      }
    });
  });

  const out = new Set();

  [...group[2]].forEach((letter3) => {
    if (shares.has(letter3)) {
      out.add(letter3);
    }
  });

  return [...out.values()].toString();
});

const aplhabeth = Array(26)
  .fill(1)
  .map((_, i) => String.fromCharCode(97 + i));

const base = aplhabeth.concat(
  [...aplhabeth].map((letter) => letter.toUpperCase())
);

const result = packsWithComp.reduce((prev, next) => {
  const weight = base.indexOf(next) + 1;
  return (prev += weight);
}, 0);

console.log(result); //answer

