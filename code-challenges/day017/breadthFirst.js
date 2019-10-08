'use strict';

const BinarySearchTree = require('../day017/BinarySearchTree');


class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
    this.children = [];
  }
}
class BinaryTree {
  constructor() {
    this.root = null;
    this.height = 0;
    this.size = 0;
  }

add(data) {
  this.children.push(new Node(data));
}



function breadthFirst(tree){

}