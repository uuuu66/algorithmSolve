const fileName = "./1389.txt";
const [NM, ...inputs] = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split("\n");
const [N, M] = NM.split(" ").map((v) => +v);
const nodes = [];
let answer = new Array(N).fill(0);
for (let i = 0; i < inputs.length; i += 1) {
  const [x, y] = inputs[i].split(" ").map((v) => +v);
  answer[x] = 0;
  if (!nodes[x]) nodes[x] = [];
  if (!nodes[y]) nodes[y] = [];
  nodes[x].push(y);
  nodes[y].push(x);
}
class Queue {
  constructor() {
    this.size = 0;
  }
  head;
  tail;
  size;
  pop() {
    if (!this.head) return false;
    const pop = this.head;

    const nextHead = pop?.getNext();

    if (nextHead) this.head = nextHead;
    else {
      this.head = undefined;
      this.tail = undefined;
    }
    this.size -= 1;
    return pop;
  }
  push(val, distance) {
    const newNode = new Node(val, distance);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.setNext(newNode);
      this.tail = newNode;
    }
    this.size += 1;
  }
  length() {
    return this.size;
  }
}
class Node {
  constructor(value, distance) {
    this.val = value;
    this.next = undefined;
    this.dist = distance;
  }
  prev;
  next;
  val;
  dist;
  getNext() {
    return this.next;
  }
  setNext(node) {
    this.next = node;

    return node;
  }
}
const solve = () => {
  const bacons = [];
  for (let i = 1; i < nodes.length; i += 1) {
    const queue = new Queue();
    const checked = [];
    queue.push(i, 0);
    let count = 0;
    while (queue.size > 0) {
      const pop = queue.pop();
      const popVal = pop.val;
      const popdist = pop.dist;
      if (!checked.includes(popVal)) {
        for (let j = 0; j < nodes[popVal].length; j += 1) {
          queue.push(nodes[popVal][j], popdist + 1);
        }
        checked.push(popVal);
        count += popdist;
      }
    }
    bacons.push(count);
  }
  console.log(bacons.indexOf(Math.min(...bacons)) + 1);
};
solve();
