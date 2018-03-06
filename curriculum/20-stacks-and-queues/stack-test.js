'use strict';

const expect = require('expect')
const Stack = require('../stack');

describe('testing stack', function(){
  it('new Stack() should return a stack', () => {
    let stack = new Stack()
    expect(stack).toBeA(Stack)
    expect(stack.top).toEqual(null)
    expect(stack.top).toEqual(null)
  })

  it('stack.push(value) should add a value to the stack', () => {
    let stack = new Stack()
    stack.push(4).push(5).push(6)
    expect(stack.top.value).toEqual(6)
    expect(stack.top.next.value).toEqual(5)
    expect(stack.top.next.next.value).toEqual(4)
  });

  it('stack.pop() should return the top value', () => {
    let stack = new Stack()
    stack.push(4).push(5).push(6)
    expect(stack.pop()).toEqual(6)
    expect(stack.pop()).toEqual(5)
    expect(stack.pop()).toEqual(4)
    expect(stack.pop()).toEqual(null)
  })
})
