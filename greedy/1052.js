let [N, K] = require("fs")
  .readFileSync("./1052.txt")
  .toString()
  .trim()
  .split(" ")
  .map((i) => +i);

const solve = (N, K) => {
  let cnt = 0;
  let problem = N;
  while (problem > 0) {
    if (problem % 2 === 1) cnt += 1;
    problem = Math.floor((problem /= 2));
  }
  return cnt;
};
let answer = 0;
while (true) {
  const cnt = solve(N + answer, K);
  if (cnt <= K) {
    return console.log(answer);
  }
  answer += 1;
}
