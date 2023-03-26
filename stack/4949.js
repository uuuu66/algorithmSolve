const fileName = "./4949.txt";
const inputs = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n");

let answer = "";

const solve = () => {
  for (let i = 0; i < inputs.length; i += 1) {
    if (inputs[i] === ".") continue;
    const stack1 = [];
    const stack2 = [];
    const nowSentences = inputs[i];
    for (let j = 0; j < nowSentences.length; j += 1) {
      const thisChar = nowSentences[j];
      if (
        thisChar === "(" ||
        thisChar === "[" ||
        thisChar === ")" ||
        thisChar === "]"
      ) {
        stack1.push(thisChar);
      }
    }

    let thisAnswer = "yes\n";
    const length = stack1.length;

    for (let j = 0; j < length; j += 1) {
      const pop = stack1.pop();

      if (pop === ")" || pop === "]") stack2.push(pop);
      else if (pop === "[") {
        if (stack2.pop() !== "]") {
          thisAnswer = "no\n";
          break;
        }
      } else if (pop === "(") {
        if (stack2.pop() !== ")") {
          thisAnswer = "no\n";
          break;
        }
      }
    }
    if (stack2.length > 0) {
      thisAnswer = "no\n";
    }

    answer += thisAnswer;
  }
  console.log(answer);
};
solve();
