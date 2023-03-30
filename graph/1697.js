const fileName = "./1697.txt";
const input = require("fs").readFileSync(fileName).toString().trim();
const solve = (input) => {
  const [sujin, target] = input.split(" ").map(Number);
  const checked = Array.from({ length: 100100 }, () => false);
  const queue = [];

  queue.push([sujin, 0]);
  while (queue.length > 0) {
    const [val, dist] = queue.shift();

    if (target === val) return dist;
    const nextArray = [val - 1, val + 1, val * 2];
    for (let i = 0; i < nextArray.length; i += 1) {
      const next = nextArray[i];
      if (!checked[next] && next >= 0 && next <= 100000) {
        checked[next] = true;
        queue.push([next, dist + 1]);
      }
    }
  }
};

console.log(solve(input));
