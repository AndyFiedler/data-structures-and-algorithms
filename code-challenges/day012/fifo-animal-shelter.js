'use strict';

const LinkedList = require('../day05/linked-list');

class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
}

class Cat extends Animal{
  constructor(name){
    super(name, 'cat')
  }
}

class Dog extends Animal{
  constructor(name) {
    super(name, 'dog')
  }
}

class AnimalShelter {
  constructor() {
    this.list = new LinkedList();
  }

  toString() {
    let str = '';
    this.list.forEach((aminal, index) => {
      str += aminal.name;
      if (index < this.list.size - 1) {
        str += ', '
      }
    });
    return `[${str}]`;
  }

  //Enq animal
  enqueue(animal) {
    this.list.append(animal);
  }
  //Deq pref
  dequeue(pref) {
    if (!pref) {
      return this.list.remove(0)
    }
    let prev = null;
    let current = this.list.head;
    while (current !== null && current.data.type !== pref) {
      prev = current;
      current = current.next;
    }
    if (!current) {
      return null
    }
    let ret = current.data;
    if (prev) {
      prev.next = current.next;
    } else {
      this.list.head = current.next;
    }
    if (!current.next) {
      this.list.tail = prev;
    }
    this.list.size--;
    return ret;
  }
}

module.exports = exports = {
  Animal, Cat, Dog, AnimalShelter
}
