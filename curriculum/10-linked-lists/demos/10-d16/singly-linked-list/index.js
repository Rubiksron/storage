'use strict';

class SLL {
  constructor(value){
    this.value = value;
    this.next = null;
  }

  appendNode(node){
    if(!(node instanceof SLL))
      return null;
    if(!this.next){
      this.next = node;
      return;
    }
    this.next.appendNode(node)
  }

  forEach(callback){
    let current = this;
    while(current){
      callback(current, this)
      current = current.next;
    }
  }
  
  findMiddle(){
    let slow, fast;
    slow = fast = this
    while(fast && fast.next && fast.next.next){
      slow = slow.next
      fast = fast.next.next
    }
    return slow
  }
}

try {
  console.log('testing SLL')

  let head = new SLL(4)
  console.assert(head.value === 4)
  console.assert(head.next === null)

  head.appendNode(new SLL(87))
  head.appendNode(new SLL(43))

  console.assert(head.value == 4)
  console.assert(head.next.value == 87)
  console.assert(head.next.next.value == 43)
  console.assert(head.next.next.next == null)
  console.dir(head, {depth: 100})

  // how to prepend
  let tmp = new SLL(8)
  tmp.next = head;
  head = tmp;

  // prepend again
  tmp = new SLL(0)
  tmp.next = head;
  head = tmp;

  let sum = 0;
  head.forEach((node, list) => {
    console.assert(list === head)
    sum += node.value
  })

  console.assert(sum == 142)

  // 0 ->  8 -> (4) -> 87 -> 43 -> null
  let middle = head.findMiddle()
  console.log('middle.value', middle.value)
  console.assert(middle.value === 4)

  console.log('success')
} catch (err) {
  console.error('failed', err)
}



