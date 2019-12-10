'use strict';
const Queue = require('./queue-with-stacks');

  describe('Queue with stacks', () => {
    let queue
    beforeEach(() => {
      queue = new Queue();
    })
    it('Can successfully enqueue into a queue', () => {
        queue.enqueue(1);
        expect(queue.getSize()).toBe(1)
    });
    
    
      it('Can successfully enqueue multiple values into a queue', () => {
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        expect(queue.getSize()).toBe(3);
    
      });
    
      it('Can successfully dequeue out of a queue the expected value', () => {
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.toString()).toBe('1, 2')
        expect(queue.dequeue()).toBe(1);
        expect(queue.toString()).toBe('2');
      });
    
      it('Can successfully peek into a queue, seeing the expected value', () => {
        queue.enqueue(9);
        expect(queue.peek()).toBe(9);
      });
    
      it('Can successfully empty a queue after multiple dequeues', () => {
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        queue.dequeue();
        queue.dequeue();
        queue.dequeue();
        expect(queue.getSize()).toBe(0)
      });
    
      it('Can successfully instantiate an empty queue', () => {
        expect(queue.getSize(0));
      });
    });
    