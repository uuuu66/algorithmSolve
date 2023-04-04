const fileName = "./1764.txt";
const [NM, ...inputs] = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n");

const [N, M] = NM.split(" ").map(Number);

const binarySearch = (array, target) => {
  let left = 0;
  let right = array.length;
  let mid = 0;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    console.log(mid, target, array);
    if (array[mid] === target) return mid;
    if (array[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};

const quickSort = (array, left, right) => {
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
};
const partition = (array, left, right) => {
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
};
const solve = (array) => {
  const array1 = array.slice(0, N);
  const targetArray = quickSort(array.slice(N), 0, M - 1);
  let answer = "";
  const lists = [];

  for (let i = 0; i < array1.length; i += 1) {
    const target = array[i];
    const searchResult = binarySearch(targetArray, target);
    if (searchResult >= 0) {
      lists.push(target);
    }
  }
  answer += lists.length + "\n";
  answer += quickSort(lists, 0, lists.length - 1).join("\n");
  console.log(answer);
};
solve(inputs);
