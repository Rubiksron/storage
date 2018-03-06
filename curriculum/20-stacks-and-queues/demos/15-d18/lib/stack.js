'use strict'

const Stack = module.exports = require('./linked_list')

Stack.prototype.push = function(value) {
  this.insert(value)
  return this
}

Stack.prototype.pop = function() {
  this.shift()
  return this
}

Stack.prototype.peek = function() {
  return this.head.val
}

function braceBalancer(str) {
  let stack = new Stack()
  for(let char in str) {
    if(str[char] === '{') stack.push(str[char])
    else stack.pop()
  }
  return stack.pop().val === null ? true : false
}

function bracketBalancer(str) {
  let map = {'}': '{', ']': '[', ')': '('}
  let stack = new Stack()
  for (let char in str) {
    if(str[char] === '{' || str[char] === '(' || str[char] === '[') {
      stack.push(str[char])
    } else {
      if(stack.peek() === map[str[char]]) {
        stack.pop()
      }
      else return false
    }
  }
  return stack.pop().val === null ? true : false
}

// let sameLength = function(str, a, b) => (str.match(a) || []).length === (str.match(b) || []).length
//
// let isBalanced = function(str) => {
//   let arr = [[/\(/gm, /\)/gm], [/\{/gm, /\}/gm], [/\[/gm, /\]/gm]],
//   i = arr.length,
//   isClean = true;
//   while (i-- && isClean) {
//     isClean = haveSameLength(str, arr[i][0], arr[i][1]);
//   }
//   return isClean;
// };
