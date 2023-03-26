const { throws } = require("assert");

const fileName = "./2164.txt";
const N = +require("fs").readFileSync(fileName).toString().trim();

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
      this.size -= 1;

      return this.tail.val;
    }
    const pop = this.head;

    const nextHead = pop?.getNext();

    this.head = nextHead;

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
const cards = new Queue();
for (let i = 1; i <= N; i += 1) {
  cards.push(i);
}
const solve = () => {
  while (cards.length() > 1) {
    cards.pop();
    const card = cards.pop();
    cards.push(card);
  }
  console.log(cards.pop());
};

solve();
