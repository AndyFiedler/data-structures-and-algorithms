'use strict';
const LinkedList = require('./linked-list');

describe('LinkedList', () => {

  it('can succesfully instantiate an empty linked list', () => {
    // Arrange

    // Act
    let list = new LinkedList();

    // Assert
    expect(list.head).toBe(null);
    // expect(list.toString()).toBe('');
  });

  it('can properly insert into the linked list', () => {
    // Arrange
    let list = new LinkedList();

    // Act
    list.insert(5);

    // Expect
    expect(list.head).toHaveProperty('data', 5);
    expect(list.head).toHaveProperty('next', null);
    // expect(list.toString()).toBe('5');
  });

  it.skip('The head property will properly point to the first node in the linked list')

  it('Can properly insert multiple nodes into the linked list', () => {
    // Arrange
    let list = new LinkedList();

    // Act
    list.insert(5);
    list.insert(10);
    list.insert(20);

    // Assert
    expect(list.toString()).toBe('20,10,5');
  });

  it('will return true when finding a value in the linked list that exists')

  it('will return false when searching for a value in the linked list that does not exist')

  it('Can properly return a collection of all the values that exist in the linked list')

});
