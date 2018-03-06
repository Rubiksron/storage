'use strict'

const HashTable = module.exports = function (size = 8192) {
  this.size = size
  this.memory = [...Array(this.size)]
}

HashTable.prototype.hashKey = function (key) {
  let hash = key.split('').reduce((p, n) => p + n.charCodeAt(0), 0) % this.size

  // NOTE Validation needs to occur to avoid hashing collissions
  return hash
}

HashTable.prototype.set = function (key, value) {
  this.memory[this.hashKey(key)] = value
}

HashTable.prototype.get = function (key) {
  return this.memory[this.hashKey(key)]
}

HashTable.prototype.remove = function (key) {
  let address = this.hashKey(key)
  this.memory[address] ? delete this.memory[address] : new Error('invalid key')
}