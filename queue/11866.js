const fileName = "./11866.txt";
const [N, K] = require("fs")
  .readFileSync(fileName)
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

class Queue {
  constructor() {
    this.head = undefined;
    this.tail = undefined;
    this.size = 0;
  }
  head;
  tail;
  size;
  pop() {
    if (!this.head) {
      this.size = 0;
      const temp = this.tail.val;
      this.tail = undefined;
      this.head = undefined;
      return temp;
    }
    const pop = this.head;

    const nextHead = pop?.getNext();

    this.head = nextHead;
    this.size -= 1;
    return pop.val;
  }
  push(val) {
    const newNode = new Node(val);

    if (this.tail) {
      this.tail = this.tail.setNext(newNode);
    } else this.head = newNode;
    this.tail = newNode;
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
const people = new Queue();
const answer = [];
for (let i = 1; i <= N; i += 1) {
  people.push(i);
}
let cnt = 0;
while (people.length() > 0) {
  const pop = people.pop();

  if (cnt < K - 1) {
    cnt++;
    people.push(pop);
  } else {
    cnt = 0;
    answer.push(pop);
  }
}
console.log(`<${answer.join(", ")}>`);
