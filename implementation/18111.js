const fileName = "18111.txt";
const [problem, ...inputs] = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n");
let [N, M, B] = problem.split(" ").map((v) => +v);
const length = N * M;

let blocks = [];
for (let i = 0; i < inputs.length; i += 1) {
  const blockChar = inputs[i].split(" ").map((v) => +v);

  blocks = blocks.concat(blockChar);
}
blocks = blocks.sort((a, b) => b - a);

const solve = () => {
  const max = Math.max(...blocks);
  const min = Math.min(...blocks);
  let minTime = Number.MAX_SAFE_INTEGER;
  let answerBlock = max;
  for (let targetH = max; targetH >= min; targetH -= 1) {
    let thisB = B;
    let digs = 0;
    let builds = 0;
    let flag = true;
    let nowAnswer = Number.MAX_SAFE_INTEGER;
    for (let blockIndex = 0; blockIndex <= length; blockIndex += 1) {
      const block = blocks[blockIndex];
      console.log(thisB, digs, builds, block, targetH);
      if (block > targetH) {
        digs += block - targetH;
        thisB += block - targetH;
      }
      if (block < targetH) {
        builds += targetH - block;
        if (thisB >= targetH - block) thisB -= targetH - block;
        else {
          flag = false;
          break;
        }
      }
    }
    if (!flag) continue;
    nowAnswer = digs * 2 + builds;
    if (minTime > nowAnswer) {
      answerBlock = targetH;
      minTime = nowAnswer;
    }
  }
  console.log(`${minTime} ${answerBlock}`);
};
solve();
