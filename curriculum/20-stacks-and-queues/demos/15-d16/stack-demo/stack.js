'use strict';

class SLL {
  constructor(value, next=null){
    this.value = value
    this.next=next
  }

  appendNode(node){
    if(!(node instanceof SLL)) 
      throw new Error('must append a SLL node')
    if(!this.next){
      this.next = node;
      return
    }

    this.next.appendNode(node)
  }
}


class Stack {
  constructor(){
    this.head = null;
  }

  push(value){
    let next = new SLL(value)
    if(!this.head){
      this.head = next;
      return this;
    }
      
    this.head.appendNode(next)
    return this
  }

  pop(){
    if(!this.head)
      return 
    let result = this.head;
    if(!result.next){
      this.head = null;
      return result.value
    }

    let tail = this.head
    result = result.next

    while(result.next){
      tail = tail.next;
      result = result.next
    }

    tail.next = null
    return result.value
  }
}




let stack = new Stack()

stack.push(4).push(5).push(8)

console.dir(stack, {depth: Infinity})


console.log('poped', stack.pop())
console.log('poped', stack.pop())
console.log('poped', stack.pop())
console.log('poped', stack.pop())
console.log('poped', stack.pop())
stack.push(4).push(5).push(8)
console.log('poped', stack.pop())
console.log('poped', stack.pop())
console.log('poped', stack.pop())
console.log('poped', stack.pop())
console.log('poped', stack.pop())
console.log('poped', stack.pop())
console.log('poped', stack.pop())
console.log('poped', stack.pop())


