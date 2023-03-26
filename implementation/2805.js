const fileName = "./2805.txt";
let [problems, trees] = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n");
const [N, M] = problems.split(" ").map((v) => +v);
const sortedTrees = trees
  .split(" ")
  .map((v) => +v)
  .sort((a, b) => a - b);

let left = 0;
let right = sortedTrees[N - 1];

const solve = () => {
  let answer = Math.floor((left + right) / 2);
  while (left <= right) {
    let amount = 0;
    let H = Math.floor((left + right) / 2);

    for (let i = 0; i < sortedTrees.length; i += 1) {
      const tree = sortedTrees[i];

      const branch = tree - H;
      if (branch > 0) amount += branch;
    }

    if (amount >= M) {
      answer = H;
      left = H + 1;
    } else {
      right = H - 1;
    }
  }
  return answer;
};

console.log(solve());
