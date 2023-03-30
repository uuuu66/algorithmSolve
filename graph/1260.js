const fs = require("fs");
const input = fs.readFileSync("./1260.txt").toString().trim().split("\n");

const NMV = input.shift().split(" ");
const N = Number(NMV.shift());
const M = Number(NMV.shift());
const V = Number(NMV.shift());

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
    return pop.val;
  }
  push(val) {
    const newNode = new Node(val);
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
  constructor(value) {
    this.val = value;
    this.next = undefined;
  }
  prev;
  next;
  val;
  getNext() {
    return this.next;
  }
  setNext(node) {
    this.next = node;

    return node;
  }
}
let nodes = [];
for (let i = 0; i <= N; i++) {
  nodes[i] = [];
}
for (let i = 0; i < M; i++) {
  const xy = input.shift().split(" ");
  const x = Number(xy.shift());
  const y = Number(xy.shift());

  nodes[x].push(y);
  nodes[y].push(x);
}

const dfs = (graph) => {
  const stack = [V];
  let checked = [];
  while (stack.length !== 0) {
    const pop = stack.pop();
    if (!checked.includes(pop)) {
      graph[pop].sort((a, b) => b - a);
      for (let i = 0; i < graph[pop].length; i += 1) {
        stack.push(graph[pop][i]);
      }
      checked.push(pop);
    }
  }
  console.log(checked.join(" "));
};

const bfs = (graph) => {
  const queue = new Queue();

  let checked = [];
  queue.push(V);

  while (queue.size > 0) {
    const pop = queue.pop();

    if (!checked.includes(pop)) {
      graph[pop]?.sort((a, b) => a - b);

      for (let i = 0; i < graph[pop].length; i += 1) {
        queue.push(graph[pop][i]);
      }
      checked.push(pop);
    }
  }

  console.log(checked.join(" "));
};
dfs(nodes);

bfs(nodes);
