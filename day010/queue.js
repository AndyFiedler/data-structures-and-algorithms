'use strict';

const LinkedList = require('../code-challenges/day05/linked-list');

class Queue {
  constructor() {
    this.list = new LinkedList();
  }

  enqueue(data) {
    this.list.append(data);
  }

  dequeue() {
    return this.list.remove(0);
  }

  peek() {
    return this.list.get(0);
  }

  toString() {
    return this.list.toString();
  }

  getSize() {
    return this.list.size;
  }
}

module.exports = Queue;
