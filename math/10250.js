const fileName = "./10250.txt";
const [_, ...inputs] = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n");
let answer = "";
const solve = () => {
  for (let i = 0; i < inputs.length; i += 1) {
    const [H, W, N] = inputs[i].split(" ").map((v) => +v);
    let floor = H;
    let roomNum = 1;
    if (H >= N) {
      floor = N;
    } else {
      floor = N % H;
      if (floor === 0) {
        floor = H;
      }
    }
    if (N / H > 1) {
      roomNum = Math.floor(N / H) + 1;
      if (floor === H) roomNum = N / H;
    }
    answer += `${floor}${roomNum < 10 ? `0${roomNum}` : roomNum}\n`;
  }
  console.log(answer.trimEnd());
};
solve();
