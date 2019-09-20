'use strict';

let current = this.head;
let previous;
let count = 0;

let results = [];

if(index ===0) {
    this.head = current.next;
} else {
    while(count < index) {
        count++;
        previous = current;
        current = current.next;
    }
}

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    //insert first node
    firstNode(data) {
        this.head = new Node(data, this.head);
    }

    //insert last node 
    lastNode(data) {
        this.tail = new Node(data, this.tail);
    }
    
    //get at index(includes)
    readAtIndex(data) {
        
    }

};

return results;
module.exports = LinkedList;







//return list(toString)