'use strict';

const LinkedList = require('../code-challenges/day05/linked-list');

class Stack {
  constructor() {
    this.list = new LinkedList;
    this.size = 0;
  }

  //push value into top of stack
  push(data) {
    this.list.insert(data);
    this.size++;
  }

  //removes value from top of stack
  pop() {
    this.size--;
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
module.exports = Stack;
