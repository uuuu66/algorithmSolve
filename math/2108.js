/*산술평균 : N개의 수들의 합을 N으로 나눈 값
중앙값 : N개의 수들을 증가하는 순서로 나열했을 경우 그 중앙에 위치하는 값
최빈값 : N개의 수들 중 가장 많이 나타나는 값
범위 : N개의 수들 중 최댓값과 최솟값의 차이*/
const fileName = "./2108.txt";
const [N, ...inputs] = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n");
const howmany = +N;
const problem = inputs.map((v) => +v);
quickSort(problem, 0, problem.length - 1);
const sum = problem.reduce((sum, next) => {
  return sum + next;
}, 0);
function quickSort(array, left, right) {
  if (array.length > 1) {
    let pivotIndex = partition(array, left, right);

    if (left < pivotIndex - 1) {
      quickSort(array, left, pivotIndex - 1);
    }
    if (pivotIndex < right) {
      quickSort(array, pivotIndex, right);
    }
  }

  return array;
}
function partition(array, left, right) {
  const pivot = array[Math.floor((left + right) / 2)];
  while (left <= right) {
    while (array[left] < pivot) {
      left += 1;
    }
    while (array[right] > pivot) {
      right -= 1;
    }
    if (left <= right) {
      const temp = array[left];
      array[left] = array[right];
      array[right] = temp;
      left += 1;
      right -= 1;
    }
  }

  return left;
}

const solve = () => {
  console.log(`${getAverage()}\n${getMid()}\n${getMode()}\n${getRange()}`);
};
const getAverage = () => {
  return Math.round(sum / howmany);
};
const getMid = () => {
  return problem[Math.floor(problem.length / 2)];
};
const getMode = () => {
  const map = new Map();
  for (let i = 0; i < problem.length; i += 1) {
    const nowNum = problem[i];
    if (!map.has(nowNum)) map.set(nowNum, 1);
    else map.set(nowNum, map.get(nowNum) + 1);
  }
  let max = Math.max(...map.values());
  let maxs = [];
  map.forEach((value, key) => {
    if (max === value) {
      maxs.push(key);
    }
  });
  if (maxs.length >= 2) return maxs[1];

  return maxs[0];
};
const getRange = () => {
  return problem[problem.length - 1] - problem[0];
};
solve();
