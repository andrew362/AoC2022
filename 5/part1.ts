import fs from 'fs';

const filePath = './5/file.txt';

const data = fs.readFileSync(filePath).toString();

const stacks = [
  'cznbmwqv',
  'hzrwcb',
  'fqrj',
  'zswhfnmt',
  'gfwlnqp',
  'lpw',
  'vbdrgcqj',
  'zqnbw',
  'hlfcgtj',
].map((stc) => [...stc].map((l) => l.toUpperCase()));

const stocksMap = new Map();

stacks.forEach((stock, idx) => {
  stocksMap.set(idx + 1, stock);
});

const procedures = data.split('\n');

const regexp = new RegExp(/\d+/, 'gmi');

type quantity = number;
type from = number;
type to = number;
type code = [quantity, from, to];

procedures.forEach((procedure) => {
  const matches = procedure.match(regexp);
  const codes = matches.map((code) => +code) as code;

  const fromStock = [...stocksMap.get(codes[1])];
  const toStock = [...stocksMap.get(codes[2])];

  for (let i = 0; i < codes[0]; i++) {
    const pop = fromStock.pop();
    toStock.push(pop);
  }

  stocksMap.set(codes[1], fromStock);
  stocksMap.set(codes[2], toStock);
});

const result = [];

stocksMap.forEach((stock) => {
  result.push(stock[stock.length - 1]);
});

console.log(result.join('')); // answer
