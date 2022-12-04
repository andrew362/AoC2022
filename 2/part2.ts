import fs from 'fs';

const filePath = './2/file.txt';

const data = fs.readFileSync(filePath).toString();

enum TypesA {
  ROCK = 'A',
  PAPER = 'B',
  SCISORS = 'C',
}

enum State {
  Z = 'Z',
  Y = 'Y',
  X = 'X',
}

const plays = data
  .split('\n')
  .map((el) => el.split(' ')) as Array<[TypesA, State]>;

const resultArray = plays.map((play) => {
  const playString = play.toString();

  let result = 0;

  switch (playString) {
    case 'A,Y':
    case 'B,X':
    case 'C,Z':
      result += 1;
      break;
    case 'A,Z':
    case 'B,Y':
    case 'C,X':
      result += 2;
      break;
    case 'A,X':
    case 'B,Z':
    case 'C,Y':
      result += 3;
      break;

    default:
      break;
  }

  switch (play[1]) {
    case State.X:
      break;
    case State.Y:
      result += 3;
      break;
    case State.Z:
      result += 6;
      break;
  }

  return result;
});

const result = resultArray.reduce(
  (prev, next) => (prev += next),
  0
);

console.log(result); //answer
