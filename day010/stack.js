'use strict';

import Node from './node'

class Stack {
    constructor() {
    this.top = null;
    this.size = 0;
    }


push(value) {
    let node = new Node(value, this.top);
    this.top = node;
    this.size++;
}

pop() {
    let value = null;

    if(this.top) {
        value = this.top.value;
        this.top = this.top.nextNode;
    }

    }
    
}

peek() {

}

}

export default Stack;