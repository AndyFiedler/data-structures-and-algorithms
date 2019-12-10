'use strict';
const Stack = require('../../day010/stack.js');

class PseudoQueue {
  constructor() {
    this.stack1 = new Stack;
    this.stack2 = new Stack;
  }
  enqueue(value){
    while (this.stack1.size > 0) {
      this.stack2.push(this.stack1.pop());
    }
    this.stack2.push(value);
    while (this.stack2.size > 0) {
      this.stack1.push(this.stack2.pop());
    }
  }
  peek() {
    return this.stack1.peek();
  }
  dequeue() {
    if(this.stack1.size === 0) {
      throw 'You cannot remove what does not exist. '
    }
    return this.stack1.pop();
  }
  getSize() {
    return this.stack1.size;
  }
  toString() {
    return this.stack1.toString();
  }
}

module.exports = PseudoQueue;

//need to implement enqueue, dequeue into PseudoQueue
//need to impement my OG stack

