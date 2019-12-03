'use strict';

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinaryTree {
  constructor() {
    this.root = null;
    this.height = 0;
    this.size = 0;
  }
  // Define a method for each of the depth first traversals called preOrder, inOrder, and postOrder which returns an array of the values, ordered appropriately.
  inOrder(node = this.root, array = []) {
    if (node !== null) {
      this.inOrder(node.left, array);
      array.push(node.data);
      this.inOrder(node.right, array);
    }
    return array;
  }

  preOrder(node = this.root, array = []) {
    if (node != null) {
      array.push(node.data);
      this.preOrder(node.left, array);
      this.preOrder(node.right, array);
    }
    return array;
  }

  postOrder(node = this.root, array = []) {
    if (node != null) {
      this.postOrder(node.left, array);
      this.postOrder(node.right, array);
      array.push(node.data);
    }
    return array;
  }
}
class BinarySearchTree extends BinaryTree {
  constructor() {
    super();
  }
  add(data, curr = this.root, depth = 0) {
    if (curr === null && depth === 0) {
      this.root = new Node(data);
      this.size = 1;
      return;
    }
    this.size++;
    depth++;
    if (data <= curr.data) {
      if (!curr.left) {
        curr.left = new Node(data);
        this.height = Math.max(depth, this.height);
        return;
      }
      this.add(data, curr.left, depth);
    } else {
      if (!curr.right) {
        curr.right = new Node(data);
        this.height = Math.max(depth, this.height);
        return;
      }
      this.add(data, curr.right, depth);
    }
  }
  contains(data, node = this.root) {
    if (!node) {
      return false;
    }
    if (node.data === data) {
      return true;
    }
    if (node.data >= data) {
      return this.contains(data, node.left);
    }
    return this.contains(data, node.right);
  }
}

module.exports = {BinaryTree, BinarySearchTree};


