'use strict';

const list = require('LinkedList');

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
    constructor(data) {
        this.list = new LinkedList();
    }
}

enqueue(animal) {
    this.list.push(animal);

}

dequeue(pref) {
    if(this.list.length == 0)
    return this.list. pop();
}