class Deque {
  constructor(array) {
    this.arr = array;
    this.head = 0;
    this.tail = array.length;
  }
  push_front(item) {
    if (this.arr[0]) {
      for (let i = this.arr.length; i > 0; i--) {
        this.arr[i] = this.arr[i - 1];
      }
    }
    this.arr[this.head] = item;
    this.tail++;
  }
  push_back(item) {
    this.arr[this.tail++] = item;
  }
  pop_front() {
    if (this.head >= this.tail) {
      return null;
    } else {
      const result = this.arr[this.head++];
      return result;
    }
  }
  pop_back() {
    if (this.head >= this.tail) {
      return null;
    } else {
      const result = this.arr[--this.tail];
      return result;
    }
  }
}
const fileName = "./5430.txt";
const [N, ...inputs] = require("fs")
  .readFileSync(fileName)
  .toString()
  .split("\n");

let answers = ``;
const solve = () => {
  for (let i = 0; i < inputs.length; i += 3) {
    const commands = inputs[i].split("");
    let problem = inputs[i + 2];
    problem = problem
      .slice(1, problem.length - 1)
      .split(",")
      .map(Number);
    const deque = new Deque(problem);
    const answerArray = [];
    let flag = false;
    let isReverse = false;
    for (let j = 0; j < commands.length; j += 1) {
      if (commands[j] === "R") {
        isReverse = !isReverse;
      }

      if (commands[j] === "D") {
        let pop = null;
        if (isReverse) {
          pop = deque.pop_back();
        } else {
          pop = deque.pop_front();
        }
        if (!pop) {
          flag = true;
          break;
        }
      }
    }
    let pop = null;
    if (isReverse) {
      pop = deque.pop_back();
    } else {
      pop = deque.pop_front();
    }
    while (pop) {
      answerArray.push(pop);
      if (isReverse) {
        pop = deque.pop_back();
      } else {
        pop = deque.pop_front();
      }
    }
    if (!flag) answers += JSON.stringify(answerArray) + "\n";
    else answers += `error\n`;
  }
};
solve();
console.log(answers);
