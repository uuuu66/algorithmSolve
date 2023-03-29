const fileName = "./1003.txt";
const [N, ...problems] = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v);

const dp = new Array(Math.max(...problems) + 1).fill([0, 0]);
dp[0] = [1, 0];
dp[1] = [0, 1];

const solve = () => {
  let answer = "";
  for (let i = 2; i < dp.length; i += 1) {
    const dp0 = dp[i - 1][0] + dp[i - 2][0];

    const dp1 = dp[i - 1][1] + dp[i - 2][1];

    dp[i] = [dp0, dp1];
  }
  for (let i = 0; i < problems.length; i += 1) {
    answer += `${dp[problems[i]].join(" ")}\n`;
  }

  console.log(answer);
};
solve();
