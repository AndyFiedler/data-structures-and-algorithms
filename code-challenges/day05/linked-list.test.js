'use strict';

let LinkedList = require('./linked-list');

describe('LinkedList', () => {
    let list;
    beforeEach(() => {
        list = new LinkedList();
    });

    it('can succesfully instantiate an empty linked list', () => {
        //Arrange
        //Act
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

    })
    it('will return false when searching for a value in the linked list that does not exist', () => {
        list.insert('1', '3', '5');
        expect(list.includes('2')).toBe(false);
    })
    it('Can properly return a collection of all the values that exist in the linked list', () => {
        list.insert('1', '3', '5', '7', '9');
        expect(list.toString()).toBe('9, 7, 5, 3, 1');
    })
});