const fileName = "./10816.txt";
const [cardsLength, cards, targetsLength, targets] = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n");

let hash = [];

let sortedCards = cards
  .split(" ")
  .map((v) => +v)
  .sort((a, b) => a - b);
const targetCards = targets.split(" ").map((v) => +v);
const binarySearchHigh = (array, target) => {
  let max = array.length - 1;
  let min = 0;
  let mid = Math.floor((max + min) / 2);
  let answer = -1;
  while (min <= max) {
    if (array[mid] === target) {
      answer = mid;
      min = mid + 1;
    } else if (array[mid] < target) {
      min = mid + 1;
    } else if (array[mid] > target) {
      max = mid - 1;
    }
    mid = Math.floor((max + min) / 2);
  }
  return answer;
};
const binarySearchLow = (array, target) => {
  let max = array.length - 1;
  let min = 0;
  let mid = Math.floor((max + min) / 2);
  let answer = -1;
  while (min <= max) {
    if (array[mid] === target) {
      answer = mid;
      max = mid - 1;
    } else if (array[mid] < target) {
      min = mid + 1;
    } else if (array[mid] > target) {
      max = mid - 1;
    }
    mid = Math.floor((max + min) / 2);
  }
  return answer;
};
const solve = () => {
  const problems = [...targetCards];
  for (let i = 0; i < +targetsLength; i += 1) {
    const high = binarySearchHigh(sortedCards, targetCards[i]);
    let low = 0;
    let howmany = 0;
    if (high >= 0) {
      low = binarySearchLow(sortedCards, targetCards[i]);
      howmany = high - low + 1;
    }
    hash.push(howmany);
  }
  let answer = "";
  for (let i = 0; i < +targetsLength; i += 1) {
    if (hash[problems[i]]) answer += `${hash[problems[i]]} `;
    else answer += `0 `;
  }
  console.log(answer);
};
solve();
