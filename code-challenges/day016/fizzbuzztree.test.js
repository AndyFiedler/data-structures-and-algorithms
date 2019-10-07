'use strict';

const {BinarySearchTree} = require('./tree');

describe('fizzbuzztree', () => {
  let tree;
  beforeEach(() => {
    tree = new BinarySearchTree();
  });
  it('Can successfully instantiate an empty tree', () => {
    expect(tree.size).toBe(0);
    expect(tree.root).toBe(null);
  });
  it('Can successfully add to an empty tree', () => {
    tree.add(1);
    expect(tree.size).toBe(1);
    expect(tree.height).toBe(0);
    expect(tree.root.data).toBe(1);
  });
  it('Can successfully add to an empty tree', () => {
    tree.add(1);
    expect(tree.size).toBe(1);
    expect(tree.height).toBe(0);
    expect(tree.root.data).toBe(1);
  });