'use strict';

// Write the following methods for the Linked List class:

// .append(value) which adds a new node with the given value to the end of the list
// .insertBefore(value, newVal) which add a new node with the given newValue immediately before the first value node
// .insertAfter(value, newVal) which add a new node with the given newValue immediately after the first value node

//ccday7
// Write a method for the Linked List class which takes a number, k, as a parameter. Return the node’s value that is k from the end of the linked list. You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.

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
  constructor(...elements) {
    this.head = null;
    this.tail = null;
    this.size = 0;
    elements.forEach(element => this.append(element));
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
    return array.join(', '); // puts a comma space between each element in an array
  }
  insertBefore(data, newData) {
    if (!this.includes(data)) {
      throw 'Value not found';
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
      this.size++;
    }
  }
  insertAfter(data, newData) {
    if (!this.includes(data)) {
      throw 'Value not found';
    }

    let current = this.head;
    if (current.data === data) {
      this.append(newData);
    } else {
      while (current.data !== data) {
        current = current.next;
      }
      let node = new Node(newData);
      node.next = current.next;
      current.next = node;
      if(current === this.tail) {
        this.tail = node;
      }
      this.size++;
    }
  }
  kthFromEnd(k) {
    if (k >= this.size) {
      throw 'There aren\'t enough elements';
    }
    return this.get(this.size - (k + 1));
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
  /*
  A = [1, 3, 5, 7]
  B = [2, 4, 6, 8]
  mergeList(A, B) = [1, 2, 3, 4, 5, 6, 7, 8]
  */
  static mergeLists(listA, listB) {
    if (listA.size === 0) return listB;
    if (listB.size === 0) return listA;
    //Do A
    let current = listA.head;
    let listACurrent = current.next;
    let listBCurrent = listB.head;
    while (listACurrent || listBCurrent) {
      //Do B (again)
      if (listBCurrent) {
        current.next = listBCurrent;
        listBCurrent = listBCurrent.next;
        current = current.next;
      }
      //Do A (again)
      if (listACurrent) {
        current.next = listACurrent;
        listACurrent = listACurrent.next;
        current = current.next;
      }
    }
    listA.size = listA.size + listB.size;
    listA.tail = current;
    return listA;
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
      if(remove === this.tail){
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
