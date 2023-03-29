const fileName = "./1012.txt";
const [T, ...inputs] = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n");
const ds = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
];
const solve = () => {
  for (let i = 0; i < T; i += 1) {
    let cnt = 0;
    var [M, N, K] = inputs.shift().split(" ").map(Number);
    var check = Array.from(Array(M), () => new Array(N).fill(0));
    for (let j = 0; j < K; j++) {
      let xy = inputs.shift().split(" ");
      check[xy[0]][xy[1]] = 1;
    }

    for (let j = 0; j < check.length; j += 1) {
      for (let q = 0; q < check[j].length; q += 1) {
        if (check[j][q]) {
          bfs([j, q], check);
          cnt += 1;
        }
      }
    }
    console.log(cnt);
  }
};
const bfs = (point, check) => {
  const x = point[0];
  const y = point[1];

  const queue = [[x, y]];
  // queue가 비워지면 탈출
  while (queue.length) {
    const [x, y] = queue.shift();

    if (!check[x][y]) continue;
    else check[x][y] = 0;

    for (let i = 0; i < 4; i++) {
      const xPos = x + ds[i][0];
      const yPos = y + ds[i][1];

      if (
        xPos < 0 ||
        yPos < 0 ||
        xPos >= check.length ||
        yPos >= check[0].length
      )
        continue;
      if (check[xPos][yPos]) queue.push([xPos, yPos]);
    }
  }
};

solve();
