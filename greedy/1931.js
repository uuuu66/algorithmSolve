const fileName = "./1931.txt";
const [N, ...inputs] = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n");

const times = inputs
  .map((val) => val.split(" ").map((v) => +v))
  .sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));

const solve = () => {
  let count = 1;
  let tmp = times[0][1];
  for (let i = 1; i < times.length; i += 1) {
    if (tmp <= times[i][0]) {
      tmp = times[i][1];
      count += 1;
    }
  }
  console.log(count);
};
solve();
