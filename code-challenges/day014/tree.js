"use strict";

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
  inorder(node = this.root, array = []) {
    if (node !== null) {
      this.inorder(node.left);
      array.push(node.data);
      this.inorder(node.right);
    }
    return array;
  }

  preorder(node = this.root, array = []) {
    if (node != null) {
      array.push(node.data);
      this.preorder(node.left);
      this.preorder(node.right);
    }
    return array;
  }

  postorder(node = this.root, array = []) {
    if (node != null) {
      this.postorder(node.left);
      this.postorder(node.right);
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
    if (data <= curr.data) {
      if (!curr.left) {
        curr.left = new Node(data);
        return depth + 1;
      }
      const newHeight = add(data, curr.left, depth + 1);
      if (this.height < newHeight) {
        this.height = newHeight;
      }
    } else {
      if (!curr.right) {
        curr.right = new Node(data);
        return depth + 1;
      }
      const newHeight = add(data, curr.right, depth + 1);
      if (this.height < newHeight) {
        this.height = newHeight;
      }
    }
  }
  contains(data, node = this.root) {
    if (!node) {
      return false;
    }
    if (node.data === data) {
      return true;
    }
    if (node.data > data) {
      return this.contains(data, node.left);
    }
    return this.contains(data, node.right);
  }
}

// Define a method for each of the depth first traversals called preOrder, inOrder, and postOrder which returns an array of the values, ordered appropriately.
