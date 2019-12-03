'use strict';

describe.skip('Stack', () => {
    describe.skip('Queue', () => {
        let stack
        beforeEach(() => {
            stack = new Stack();
        })
    it('Can successfully push onto a stack', () => {
        //Arrange
        stack.push(1);
        expect(stack.peek()).toBe(1);
        //Act
        //Assert
    });

    it('Can successfully push multiple values onto a stack', () => {
        //Arrange
        stack.push(1);
        stack.push(2);
        stack.push(3);
        expect(stack.toString()).toBe('3, 2, 1')
        //Act
        //Assert
    });

    it('Can successfully pop off the stack', () => {
        //Arrange
         //Act
        stack.push(1);
        stack.push(2);
        stack.push(3);
         //Assert
        expect(stack.pop()).toBe(3);
        expect(stack.toString()).toBe('2, 1');
       
       
    });

    it('Can successfully empty a stack after multiple pops', () => {
        //Arrange
        stack.push(1);
        stack.push(2);
        stack.push(3);
        //Act
        //Assert
    });

    it('Can successfully peek the next item on the stack', () => {
        //Arrange
        //Act
        //Assert
    });

    it('Can successfully instantiate an empty stack', () => {
        //Arrange
        //Act
        //Assert
    });
});
});