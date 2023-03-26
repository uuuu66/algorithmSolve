const fileName = "./1920.txt";
let [N, target, M, problem] = require("fs")
  .readFileSync(fileName)
  .toString()
  .split("\n");
target = target
  .trim()
  .split(" ")
  .map((v) => +v)
  .sort((a, b) => a - b);

problem = problem
  .trim()
  .split(" ")
  .map((v) => +v);

const solve = () => {
  const length = problem.length;
  let answer = "";
  for (let i = 0; i < length; i += 1) {
    const willFindNum = problem[i];

    let minIndex = 0;
    let maxIndex = target.length - 1;
    while (true) {
      if (minIndex > maxIndex) {
        answer += "0\n";
        break;
      }
      let midIndex = Math.floor((minIndex + maxIndex) / 2);
      const findedNum = target[midIndex];

      if (findedNum === willFindNum) {
        answer += "1\n";
        break;
      }
      if (findedNum < willFindNum) {
        minIndex = midIndex + 1;
      } else {
        maxIndex = midIndex - 1;
      }
    }
  }
  console.log(answer.trimEnd());
};

solve();
