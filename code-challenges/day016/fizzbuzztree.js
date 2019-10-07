'use strict';

function fizzBuzzTree(tree){
  function inOrder(node) {
    if (node !== null) {
      inOrder(node.left);
      if(node.data % 15 === 0){
        node.data = 'FizzBuzz';
      } else if(node.data % 5 === 0){
        node.data = 'Buzz';
      } else if(node.data % 3 === 0){
        node.data = 'Fizz';
      }
      inOrder(node.right);
    }
  }
  inOrder(tree.root);
  return tree;
}

module.exports = fizzBuzzTree;
