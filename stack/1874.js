const fileName = "./1874.txt";
const [N, ...inputs] = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n");

const numArray = [];
const result = [];
const stack = [];
let answer = "";
const Num = +N;
for (let i = 1; i <= Num; i += 1) {
  numArray.push(i);
}
const solve = () => {
  for (let i = 0; i < Num; i += 1) {
    while (result.length < Num) {
      if (stack[stack.length - 1] === +inputs[i]) {
        answer += "\n-";
        result.push(stack.pop());
        break;
      }
      if (stack[stack.length - 1] && stack[stack.length - 1] > +inputs[i]) {
        console.log("no");
        return;
      }
      const shiftedNum = numArray.shift();
      answer += "\n+";
      stack.push(shiftedNum);
    }
  }
  console.log(answer);
};
solve();
