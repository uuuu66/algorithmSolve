const fileName = "./4153.txt";
const inputs = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n");

const solve = () => {
  let answer = "";
  for (let i = 0; i < inputs.length - 1; i += 1) {
    const sortedNum = inputs[i].split(" ").sort((a, b) => +a - +b);

    if (
      sortedNum[2] * sortedNum[2] - sortedNum[1] * sortedNum[1] ===
      sortedNum[0] * sortedNum[0]
    ) {
      answer += "right\n";
    } else answer += "wrong\n";
  }
  console.log(answer);
};
solve();
