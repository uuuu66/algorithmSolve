const fileName = "./1259.txt";
const inputs = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n");

const solve = (N) => {
  const problem = N.toString();
  const length = problem.length;

  for (let i = 0; i < Math.floor(length / 2); i += 1) {
    if (problem[i] !== problem[length - 1 - i]) return "no";
  }
  return "yes";
};
for (let i = 0; i < inputs.length - 1; i += 1) {
  console.log(solve(inputs[i]));
}
