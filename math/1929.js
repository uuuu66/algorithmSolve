const fileName = "./1929.txt";
const [min, max] = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split(" ");
let nums = [];
let result = [];
let answer = "";
for (let i = 0; i <= max; i += 1) {
  result.push(1);
  nums.push(i);
  //1은 소수 0은 소수x
}
const solve = () => {
  result[1] = 0;
  for (let i = 2; i <= nums.length; i += 1) {
    let cnt = 2;

    while (nums[i] * cnt <= max) {
      result[nums[i] * cnt] = 0;
      cnt += 1;
    }
  }
  for (let i = 1; i < result.length; i += 1) {
    if (i >= min && i <= max) {
      if (result[i] === 1) answer += `${i}\n`;
    }
  }
  console.log(answer);
};

solve();
