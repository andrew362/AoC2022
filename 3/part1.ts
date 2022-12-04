import fs from 'fs';

const filePath = './3/file.txt';

const data = fs.readFileSync(filePath).toString();

const packs = data.split('\n');

const packsWithComp = packs.map((pack) => {
  const firstHalf = pack.slice(0, pack.length / 2);
  const secondHalf = pack.slice(
    pack.length / 2,
    pack.length
  );

  const shares = new Set();

  [...firstHalf].forEach((letter1) => {
    [...secondHalf].forEach((letter2) => {
      if (letter1 === letter2) {
        shares.add(letter2);
      }
    });
  });

  return [...shares.values()].toString();
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
