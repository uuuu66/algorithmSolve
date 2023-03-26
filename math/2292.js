const fileName = "./2292.txt";
const N = +require("fs").readFileSync(fileName).toString().trim();

const solve = () => {
  let ends = 1;
  let cnt = 0;
  while (true) {
    cnt += 1;

    if (N <= ends) {
      break;
    }
    ends += cnt * 6;
  }
  return cnt;
};
console.log(solve());
