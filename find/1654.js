const fileName = "./1654.txt";
const inputs = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n");

const [K, N] = inputs.shift().split(" ");
const lines = inputs.map((v) => +v).sort((a, b) => b - a);
let max = lines[0];
let min = 1;
let mid = 0;
let answer = 0;
const solve = (lines, N) => {
  while (min <= max) {
    mid = parseInt((max + min) / 2);
    let sum = lines.reduce((sum, value) => {
      return (sum += parseInt(value / mid));
    }, 0);

    if (sum >= N) {
      if (mid > answer) answer = mid;
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }
};
solve(lines, N);
console.log(answer);
