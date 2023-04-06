const fileName = "./2606.txt";
const [a, n, ...inputs] = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n");
const node = {};
for (let i = 0; i < inputs.length; i += 1) {
  const [A, B] = inputs[i].split(" ").map((v) => +v);
  if (!node[A]) {
    node[A] = [B];
  } else {
    if (!node[A].includes(B)) node[A].push(B);
  }
  if (!node[B]) {
    node[B] = [A];
  } else {
    if (!node[B].includes(A)) node[B].push(A);
  }
}

const solve = () => {
  const stack = [];
  const checked = [];
  stack.push(1);
  let count = 0;
  while (stack.length > 0) {
    const pop = stack.pop();
    if (!checked.includes(pop)) {
      checked.push(pop);
      count += 1;
    }
    for (let i = 0; i < node[pop].length; i += 1) {
      const next = node[pop][i];
      if (!checked.includes(next)) stack.push(next);
    }
  }
  console.log(count - 1);
};
solve();
