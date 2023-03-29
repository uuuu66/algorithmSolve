const fileName = "./1074.txt";
const [N, r, c] = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);
let res = 0;
const divide = (row, col, size) => {
  if (row === r && col === c) {
    // 좌표 찾음
    console.log(res);
    return;
  }
  if (r >= row && r < row + size && c >= col && c < col + size) {
    // 영역 내에 있음
    size = parseInt(size / 2);
    divide(row, col, size);
    divide(row, col + size, size);
    divide(row + size, col, size);
    divide(row + size, col + size, size);
  } else res += size * size; // 좌표 못 찾음!
};

divide(0, 0, Math.pow(2, N));
// https://breathtaking-life.tistory.com/155?category=914488 코드 복붙함
