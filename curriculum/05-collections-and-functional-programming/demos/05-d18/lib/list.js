'use strict'

let List = module.exports = function() {
  for(let key in arguments) this[key] = arguments[key]
  this.length = arguments.length
}

List.prototype.copy = function() {
  // let list = new List()
  // let list = Object.create(this)
  for(let key in this) list[key] = this[key]
  return list
}

List.prototype.pushO1 = function(value) {
  this[this.length++] = value
  return this
}

List.prototype.pushOn = function(value) {
  let list = Object.create(List)
  list[list.length++] = value
  return list
}

List.prototype.pop = function() {

}

List.prototype.forEach = function(callback) {
  for(let i = 0; i < this.length; i++) {
    callback(this[i], i, this)
  }
}