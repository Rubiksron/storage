'use strict'

const List = require('./lib/list')

let list = new List(1, 2, 3, 4)
let newList = list.copy()

console.log(newList)

console.log(list === newList)