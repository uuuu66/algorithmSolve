const fileName = "./1780.txt";
const [N, ...inputs] = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n");
const howmany = +N;
const paper = inputs.map((val) => val.split(" ").map(Number));
const answer = [0, 0, 0];
const solve = (x, y, size) => {
  let count = 0;
  let target = paper[y][x];
  for (let i = 0; i < size; i += 1) {
    for (let j = 0; j < size; j += 1) {
      if (paper[y + i][x + j] === target) {
        count += 1;
      } else {
        break;
      }
    }
  }
  if (count === size * size) {
    answer[target + 1] += 1;
  } else {
    size /= 3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        solve(x + i * size, y + j * size, size);
      }
    }
  }
};
solve(0, 0, howmany);
console.log(answer.join("\n"));
