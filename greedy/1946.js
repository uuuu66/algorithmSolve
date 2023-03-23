let input = require("fs")
  .readFileSync("./1946.txt")
  .toString()
  .trim()
  .split("\n");

for (let i = 1; i < input.length; ) {
  let section = Number(input[i]);
  let arr = input
    .slice(i + 1, i + 1 + section)
    .map((i) => i.split(" ").map((i) => +i));
  sortByDocAndRecruit(arr);
  i += section + 1;
}

function sortByDocAndRecruit(array) {
  array = array.sort((a, b) => a[0] - b[0]);
  console.log(array);
  let count = 1;
  let min = array[0][1];
  for (let i = 1; i < array.length; i += 1) {
    if (min > array[i][1]) {
      count += +1;
      min = array[i][1];
    }
  }
  console.log(count);
}
