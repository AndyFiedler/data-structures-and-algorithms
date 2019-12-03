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
}

class MaxVal extends BinaryTree {
  constructor() {
    let max = node.data;
    if (node.left != null) {
      max = node.left;
      if (max < node.right) {
        max = node.right;
      }
      return max;
    }
  }
}

