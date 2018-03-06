'use strict';

const greet = require('./lib/greet.js');
const arithmetic = require('./lib/arithmetic.js');

greet('slug');

console.log('arithmetic.add(1,2)', arithmetic.add(1,2));
console.log('arithmetic.subtract(1,2)', arithmetic.subtract(1,2));
