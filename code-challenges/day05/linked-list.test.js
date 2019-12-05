'use strict';

let LinkedList = require('./linked-list');

describe('LinkedList', () => {
  let list;
  beforeEach(() => {
    list = new LinkedList();
  });

  it('can succesfully instantiate an empty linked list', () => {
    //Arrange
    //Acts
    //Assert
    expect(list.head).toBe(null);
    expect(list.size).toBe(0);
  });
  it('can properly insert into the linked list', () => {
    //Arrange
    list.insert('5');
    expect(list.toString()).toBe('5');
    list.insert('7');
    expect(list.toString()).toBe('7, 5');
  });
  it('The head property will properly point to the first node in the linked list', () => {
    list.insert(0);
    expect(list.head.data).toBe(0);
    list.insert(13);
    expect(list.head.data).toBe(13);
  });
  it('will return true when finding a value in the linked list that exists', () => {
    list.insert('1', '3', '5');
    expect(list.includes('1')).toBe(true);
    expect(list.includes('3')).toBe(true);
    expect(list.includes('5')).toBe(true);

  });
  it('will return false when searching for a value in the linked list that does not exist', () => {
    list.insert('1', '3', '5');
    expect(list.includes('2')).toBe(false);
  });
  it('Can properly return a collection of all the values that exist in the linked list', () => {
    list.insert('1', '3', '5', '7', '9');
    expect(list.toString()).toBe('1, 3, 5, 7, 9');
  });
  it(' add a new node with the given newValue immediately before the first value node', () => {
    list.insert('1', '3', '5', '9');
    list.insertBefore('9', '7');
    expect(list.toString()).toBe('1, 3, 5, 7, 9');
  })
  it('remove method can remove from tail if you omit the index', () => {
    list.insert('1', '3', '5', '7', '9');
    list.remove(4);
    expect(list.toString()).toBe('1, 3, 5, 7');
  })

  it('append method can add a new node at the end of the list', () => {
    list.insert('1', '3', '5', '7');
    expect(list.toString()).toBe('1, 3, 5, 7');
    list.append('9');
    expect(list.toString()).toBe('1, 3, 5, 7, 9');
  })

  it('insertBefore can insert a new node before the first value node', () => {
    list.insert('1', '3', '5', '7');
    expect(list.toString()).toBe('1, 3, 5, 7');
    list.insertBefore('1', '-1');
    expect(list.toString()).toBe('-1, 1, 3, 5, 7');
    list.insertBefore('5', '9');
    expect(list.toString()).toBe('-1, 1, 3, 9, 5, 7');
  })

  it('insertAfter can add a node after the given first value node', () => {
    list.insert('1', '3', '5', '7');
    expect(list.toString()).toBe('1, 3, 5, 7');
    list.insertAfter('7', '9');
    expect(list.toString()).toBe('1, 3, 5, 7, 9');
    list.insertAfter('3', '4');
    expect(list.toString()).toBe('1, 3, 4, 5, 7, 9');
  })
});
