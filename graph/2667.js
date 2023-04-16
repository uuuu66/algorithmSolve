const fileName = "2667.txt";
const boards = [];
const checked = [];
const [N, ...inputs] = require("fs")
  .readFileSync(fileName)
  .toString()
  .split("\n");
for (let i = 0; i < inputs.length; i += 1) {
  const splittedString = inputs[i].split("");
  checked.push([]);
  boards.push([]);
  for (let j = 0; j < splittedString.length; j += 1) {
    boards[i].push(+splittedString[j]);
    checked[i].push(false);
  }
}

const answers = [];
const length = +N;
const directionsXY = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
];

const bfs = (x, y) => {
  const queue = [];
  queue.push([x, y]);
  let result = 0;
  while (queue.length > 0) {
    const pop = queue.shift();

    const [px, py] = pop;
    if (checked[py][px] === false) {
      result += 1;
      checked[py][px] = true;
    } else {
      continue;
    }
    for (let i = 0; i < directionsXY.length; i += 1) {
      const [dx, dy] = directionsXY[i];
      const rx = px + dx;
      const ry = py + dy;

      if (rx < 0 || ry < 0 || rx > length - 1 || ry > length - 1) {
        continue;
      }

      if (boards[ry][rx] === 1) {
        queue.push([rx, ry]);
      }
    }
  }
  answers.push(result);
};
const solve = () => {
  for (let i = 0; i < length; i += 1) {
    for (let j = 0; j < length; j += 1) {
      if (boards[i][j] === 1 && checked[i][j] === false) {
        bfs(j, i);
      }
    }
  }
};
solve();
answers.sort((a, b) => a - b);

let answer = `${answers.length}\n`;
for (let i = 0; i < answers.length; i += 1) {
  answer += `${answers[i]}\n`;
}
console.log(answer);
