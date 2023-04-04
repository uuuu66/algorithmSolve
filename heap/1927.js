const fileName = "./1927.txt";
const [N, ...inputs] = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n");

class heap {
  heap = [];
  constructor() {
    this.heap = [];
  }
  swap(index1, index2) {
    const temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }
  getParentIndex(cur) {
    return Math.floor((cur - 1) / 2);
  }
  getLeftChild(cur) {
    return cur * 2 + 1;
  }
  getRightChild(cur) {
    return cur * 2 + 2;
  }
  parent(cur) {
    const parentNode = this.heap[this.getParentIndex(cur)];
    if (parentNode) return parentNode;
    return null;
  }
  leftChild(cur) {
    const leftNode = this.heap[this.getLeftChild(cur)];
    if (leftNode) return leftNode;
    return null;
  }
  rightChild(cur) {
    const rightNode = this.heap[this.getRightChild(cur)];
    if (rightNode) return rightNode;
    return null;
  }
  peek() {
    if (this.heap[0]) return this.heap[0];
    return 0;
  }
  bubbleUp() {
    let index = this.heap.length - 1;
    while (this.parent(index) > this.heap[index]) {
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
  }
  bubbleDown(index) {
    const leftIndex = this.getLeftChild(index);
    const rightIndex = this.getRightChild(index);
    const length = this.heap.length;
    let smallestIndex = index;

    if (
      leftIndex < length &&
      this.leftChild(index) < this.heap[smallestIndex]
    ) {
      smallestIndex = leftIndex;
    }
    if (
      rightIndex < length &&
      this.rightChild(index) < this.heap[smallestIndex]
    ) {
      smallestIndex = rightIndex;
    }
    if (smallestIndex !== index) {
      this.swap(index, smallestIndex);
      this.bubbleDown(smallestIndex);
    }
  }
  add(node) {
    this.heap.push(node);
    this.bubbleUp();
  }
  delete() {
    const temp = this.heap[0];
    console.log(this.heap, temp);
    this.heap[0] = this.heap[this.heap.length - 1];

    this.heap.pop();
    this.bubbleDown(0);
    if (!temp) return 0;

    return temp;
  }
  size() {
    return this.heap.length;
  }
}

const howmany = +N;

const minHeap = new heap();

let answer = "";
for (let i = 0; i < howmany; i += 1) {
  const now = +inputs[i];
  if (now === 0) {
    if (minHeap.size() === 0) {
      answer += `0\n`;
    } else answer += `${minHeap.delete() || 0}\n`;
  } else minHeap.add(+inputs[i]);
}
console.log(answer);
