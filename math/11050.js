const fileName = "./11050.txt";
const [N, M] = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

const max = Math.max(N, M);
const dp = new Array(max).fill(1);

const factorial = () => {
  for (let i = 2; i <= max; i += 1) {
    dp[i] = dp[i - 1] * i;
  }
};
factorial();

const solve = () => {
  if (N === 1) return 1;
  return dp[N] / dp[N - M] / dp[M];
};

console.log(solve());
