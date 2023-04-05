const fileName = "./2178.txt";
const [NM, ...inputs] = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n");

const board = [];
for (let i = 0; i < inputs.length; i += 1) {
  board.push(inputs[i].split("").map((v) => +v));
}
const [N, M] = NM.split(" ").map((v) => +v);
const dx = [-1, 0, 1, 0];
const dy = [0, -1, 0, 1];
const solve = () => {
  const queue = [[0, 0]];
  const checked = [[]];
  checked[0][0] = 1;
  while (queue.length > 0) {
    const now = queue.shift();

    for (let i = 0; i < 4; i += 1) {
      const nx = now[1] + dx[i];
      const ny = now[0] + dy[i];
      if (ny < 0 || ny >= +N || nx < 0 || nx >= +M) continue;
      if (checked[ny] === undefined) {
        checked[ny] = [];
      }

      if (board[ny][nx] && !checked[ny][nx]) {
        queue.push([ny, nx]);
        checked[ny][nx] = checked[now[0]][now[1]] + 1;
      }
    }
  }
  console.log(checked[N - 1][M - 1]);
};
solve();
