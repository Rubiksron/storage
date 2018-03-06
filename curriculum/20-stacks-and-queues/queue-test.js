'use strict';

const expect = require('expect')
const Queue = require('../queue');

describe('testing queue', function(){
  it('new Queue() should return a queue', () => {
    let queue = new Queue()
    expect(queue).toBeA(Queue)
    expect(queue.head).toEqual(null)
    expect(queue.tail).toEqual(null)
  })

  it('queue.enqueue(value) should add a value to the queue', () => {
    let queue = new Queue()
    queue.enqueue(4).enqueue(5).enqueue(6)
    expect(queue.head.value).toEqual(4)
    expect(queue.head.next.value).toEqual(5)
    expect(queue.head.next.next.value).toEqual(6)
  });

  it('queue.dequeue() should return the head value', () => {
    let queue = new Queue()
    queue.enqueue(4).enqueue(5).enqueue(6)
    expect(queue.dequeue()).toEqual(4)
    expect(queue.dequeue()).toEqual(5)
    expect(queue.dequeue()).toEqual(6)
    expect(queue.dequeue()).toEqual(null)
    expect(queue.head).toEqual(null)
    expect(queue.tail).toEqual(null)
  })
})
