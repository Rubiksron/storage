'use strict';

const SLL = require('../singly-linked-list');

const Queue = module.exports = function(){
  this.head = null;
  this.tail = null;
}

Queue.prototype.enqueue = function(value){
  if(!this.head) {
    this.head = this.tail = new SLL(value);
    return this;
  }

  this.tail.append(new SLL(value))
  this.tail = this.tail.next;
  return this;
}

Queue.prototype.dequeue = function(){
  if(!this.head)
    return null;
  
  let result = this.head.value;
  if(this.head == this.tail) 
    this.head = this.tail = null
  else 
    this.head = this.head.next;

  return result;
}
