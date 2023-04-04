const fileName = "./1992.txt";
const [N, ...inputs] = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n");
const board = [];
for (let i = 0; i < +N; i += 1) {
  const splitted = inputs[i].split("").map((v) => +v);
  board.push(splitted);
}
let answer = "";
const recursion = (length, x, y) => {
  const first = board[y][x];
  let flag = 0;

  for (let i = x; i < x + length; i += 1) {
    for (let j = y; j < y + length; j += 1) {
      if (first === board[j][i]) {
        flag = 1;
      } else {
        flag = 0;
        break;
      }
    }
    if (flag === 0) {
      break;
    }
  }
  if (flag === 0) {
    const nextLength = length / 2;
    answer += "(";

    recursion(nextLength, x, y);
    recursion(nextLength, x + nextLength, y);
    recursion(nextLength, x, y + nextLength);
    recursion(nextLength, x + nextLength, y + nextLength);
    answer += ")";
  } else {
    answer += first;
  }
};
const solve = () => {
  recursion(+N, 0, 0);
};
solve();
console.log(answer);
