'use strict';
let current = this.head;
let previous;
let count = 0;

class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
};

insertFirst(data) {
    this.head = new Node(data, this.head);
}