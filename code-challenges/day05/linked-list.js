"use strict";

function rangeCheck(index, size) {
  if (size <= index || index < 0) {
    throw new Error(`Array index out of bounds: ${index}`);
  }
}

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
    data.reverse();
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

  //get at index (includes)
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
  insertBefore(data, newData) {
    if (!this.includes(data)) {
      throw "Value not found";
    }

    let current = this.head;
    if (current.data === data) {
      this.insert(newData);
    } else {
      while (current.next.data !== data) {
        current = current.next;
      }
      let node = new Node(newData);
      node.next = current.next;
      current.next = node;
    }
  }
  insertAfter(data, newData) {
    if (!this.includes(data)) {
      throw "Value not found";
    }

    let current = this.head;
    if (current.data === data) {
      this.insert(newData);
    } else {
      while (current.data !== data) {
        current = current.next;
      }
      let node = new Node(newData);
      node.next = current.next;
      current.next = node;
    }
  }
  get(index) {
    rangeCheck(index, this.size);
    let current = this.head;
      let i = 0;
      while(i < index){
        current = current.next;
        i++;
      }
      return current.data;
  }
  remove(index = this.size - 1) {
    rangeCheck(index, this.size);
    let toReturn;
    if (index === 0) {
      toReturn = this.head.data;
      this.head = this.head.next;
    } else {
      let current = this.head;
      let i = 0;
      while(i < index - 1){
        current = current.next;
        i++;
      }
      let remove = current.next;
      if(remove = this.tail){
        current.next = null;
        this.tail = current;
      } else {
        current.next = remove.next;
      }
      toReturn = remove.value;
    }
    this.size--;
    return toReturn;
  }
}

module.exports = LinkedList;
