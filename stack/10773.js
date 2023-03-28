const fileName = "./10773.txt";
const [K, ...numbers] = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n");
let answer = "";

class Stack {
  array = [];
  sum = 0;
  push(number) {
    this.array.push(number);
    this.sum += number;
  }
  pop() {
    const pop = this.array.pop();
    this.sum -= pop;
  }
}

const solve = () => {
  const newStack = new Stack();
  for (let i = 0; i < +K; i += 1) {
    const number = +numbers[i];
    if (number === 0) newStack.pop();
    else newStack.push(number);
  }
  console.log(newStack.sum);
};
solve();
