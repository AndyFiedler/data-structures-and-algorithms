'use strict';

class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }

class Stack {
    constructor() {
    this.top = null;
    this.size = 0;
    }

//push value into top of stack
push(value) {
    let node = new Node(value, this.top);
    this.top = node;
    this.size++;
}

//removes value from top of stack
pop() {
    let value = null;

    if(this.top) {
        value = this.top.value;
        this.top = this.top.nextNode;
    }

    }
    
}
//returns value from top of stack
peek() {
    return this[this.length -1];

}

}

export default Stack;