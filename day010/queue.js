"use strict";

const LinkedList = require("../code-challenges/day05/linked-list");

class Queue {
  constructor() {
    this.list = new LinkedList();
  }

  enqueue(data) {
    this.list.append(data);
  }

  dequeue() {
    this.list.remove(0);
  }

  peek() {
    this.list.get(0);
  }
}

module.exports = Queue;