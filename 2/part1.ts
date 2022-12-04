import fs from 'fs';

const filePath = './2/file.txt';

const data = fs.readFileSync(filePath).toString();

enum TypesA {
  ROCK = 'A',
  PAPER = 'B',
  SCISORS = 'C',
}

enum TypesB {
  ROCK = 'X',
  PAPER = 'Y',
  SCISORS = 'Z',
}

enum Scores {
  ROCK = 1,
  PAPER = 2,
  SCISORS = 3,
}

const maps = new Map<TypesA | TypesB, Scores>([
  [TypesA.ROCK, Scores.ROCK],
  [TypesA.PAPER, Scores.PAPER],
  [TypesA.SCISORS, Scores.SCISORS],
  [TypesB.ROCK, Scores.ROCK],
  [TypesB.PAPER, Scores.PAPER],
  [TypesB.SCISORS, Scores.SCISORS],
]);

const plays = data
  .split('\n')
  .map((el) => el.split(' ')) as Array<[TypesA, TypesB]>;

function getMatchResult(play: [TypesA, TypesB]) {
  const playerA = maps.get(play[0]);
  const playerB = maps.get(play[1]);

  const state = playerA - playerB;

  let result = 0;

  switch (true) {
    case state === 0: //draw
      result += 3;
      break;
    case state == -1: // lose
    case state == 2: //win
      result += 6;
      break;
  }

  switch (playerB) {
    case 1:
      result += 1;
      break;
    case 2:
      result += 2;
      break;
    case 3:
      result += 3;
      break;
  }

  return result;
}

const scores = plays.map((play) => {
  const out = getMatchResult(play);
  return out;
});

const outcome = scores.reduce(
  (prev, next) => (prev += next),
  0
);

console.log(outcome); //answer
