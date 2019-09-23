"use strict";

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(data) {
    let node = new Node(data);
    if (this.head === null) {
      this.head = node;
    }
    if (this.tail) {
      this.tail.next = node;
    }
    this.tail = node;
    this.size++;
  }

  //insert last node
  insert(...data) {
    for (const datum of data) {
      let node = new Node(datum);
      node.next = this.head;
      if (!this.head) {
          this.tail = node;
      }
      this.head = node;
      this.size++;
    }
  }

  //get at index(includes)
  includes(data) {
    let link = this.head;
    while (link !== this.tail && link.data !== data) {
      link = link.next;
    }
    return link.data === data;
  }
  toString() {
    let array = [];
    let link = this.head;
    while (link !== this.tail) {
      array.push(link.data);
      link = link.next;
    }
    array.push(link.data);
    return array.join(", "); // puts a comma space between each element in an array
  }
}

module.exports = LinkedList;
