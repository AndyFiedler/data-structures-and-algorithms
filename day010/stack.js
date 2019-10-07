"use strict";

const LinkedList = require('../code-challenges/day05/linked-list');

class Stack {
  constructor() {
    this.list = new LinkedList;
  }

  //push value into top of stack
  push(data) {
    this.list.insert(data);
  }

  //removes value from top of stack
  pop() {
    return this.list.remove(0);
    }
  

  //returns value from top of stack
  peek() {
    return this.list.get(0);
  }

  toString() {
    return this.list.toString();
  }
}
module.exports = Queue;
