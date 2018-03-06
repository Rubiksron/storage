/*
Create a NodeJS module in the lib/ directory named arithmetic.js that exports an object. This module should have add and sub methods that implament addition and subtraction.

The add method should have an arity of two (define two paramiters)
If either parameter is a non-number the function should return null
Else return the sum of the 2 numbers
The sub method should have an arity of two (define two paramiters)
If either parameter is a non-number the function should return null
Else return the second paramiter subtracted from the first paramiter
*/
function add(a, b) {
  if (!isNum(a) || !isNum(b)) {
    return null;
  }
  return a + b;
}

function sub(a, b) {
  if (!isNum(a) || !isNum(b)) {
    return null;
  }
  return a - b;
}

function isNum(val) {
  return typeof val === 'number';
}

module.exports = {add, sub};
