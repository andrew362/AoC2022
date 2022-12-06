import fs from 'fs';

const filePath = './6/file.txt';

const data = fs.readFileSync(filePath).toString();

const buffor: string[] = [];

const set = new Set();
let signalIndex = 0;

for (let i = 0; i < data.length; i++) {
  const index = i % 14;

  buffor[index] = data[i];

  if (i > 14) {
    buffor.forEach((el) => set.add(el));
  }

  if (set.size === 14) {
    signalIndex = i;
    break;
  }

  set.clear();
}

console.log(signalIndex + 1);
