const fileName = "./2775.txt";
const [N, ...inputs] = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n");
const problems = [];
const floors = [];
const nums = [];
for (let i = 0; i < inputs.length; i += 2) {
  const floor = +inputs[i];
  const num = +inputs[i + 1];
  problems.push([floor, num]);
  floors.push(floor);
  nums.push(num);
}

const solve = () => {
  const floor = Math.max(...floors);
  const num = Math.max(...nums);
  const dp = [];
  dp[0] = [];
  for (let i = 1; i <= num; i += 1) {
    dp[0][i] = i;
  }
  for (let nowFloor = 1; nowFloor <= floor; nowFloor += 1) {
    dp[nowFloor] = [];
    for (let nowNum = 1; nowNum <= num; nowNum += 1) {
      if (nowNum === 1) {
        dp[nowFloor][nowNum] = 1;
        continue;
      }
      dp[nowFloor][nowNum] =
        dp[nowFloor][nowNum - 1] + dp[nowFloor - 1][nowNum];
    }
  }
  let answer = "";
  for (let i = 0; i < problems.length; i += 1) {
    answer += `${dp[problems[i][0]][problems[i][1]]}\n`;
  }
  console.log(answer.trimEnd());
};
solve();
