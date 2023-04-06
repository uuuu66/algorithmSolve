const fileName = "./2630.txt";
const [N, ...inputs] = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n");
const board = new Array(8).fill([]);
for (let i = 0; i < inputs.length; i += 1) {
  board[i] = inputs[i].split(" ").map((v) => +v);
}
const answer = [0, 0];
const solve = (x, y, length) => {
  const half = length / 2;
  let flag = 0;
  const firstValue = board[y][x];

  for (let i = 0; i < length; i += 1) {
    for (let j = 0; j < length; j += 1) {
      const ny = y + i;
      const nx = x + j;
      if (firstValue !== board[ny][nx]) {
        flag = 1;
      }
    }
  }
  if (flag === 0) {
    answer[firstValue] += 1;
  } else {
    solve(x, y, half);
    solve(x + half, y, half);
    solve(x, y + half, half);
    solve(x + half, y + half, half);
  }
};
solve(0, 0, N);
console.log(answer[0] + "\n" + answer[1]);
