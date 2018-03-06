'use strict'

const SLL = require('../singly-linked-list')

const Stack = module.exports = function(){
  this.top = null; 
}

Stack.prototype.push = function(value){
  if(!this.top){
    this.top = new SLL(value);
    return this;
  }
  this.top = SLL.prepend(this.top, new SLL(value));
  return this;
}

Stack.prototype.pop = function(){
  if(!this.top) return null;
  let result = this.top.value;
  this.top = this.top.next;
  return result;
}
