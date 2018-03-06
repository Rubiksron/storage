'use strict'

const Node = require('./node')

module.exports = class {
  constructor() {
    this.head = null
    this.tail = null
  }

  prepend(val) {
    let node = new Node(val)
    if(!this.head) {
      this.head = this.tail = node
      return this
    }

    node.next = this.head
    this.head.prev = node
    this.head = node
    return this
  }

  append(val) {
    let node = new Node(val)
    if(!this.tail) {
      this.tail = this.head = node
      return this
    }

    node.prev = this.tail
    this.tail.next = node
    this.tail = node
    return this
  }

  removeHead() {
    if(!this.head) return null
    let temp = this.head.next
    temp.prev = this.head.next = null
    this.head = temp
    return this
  }

  removeTail() {
    if(!this.tail) return null
    let temp = this.tail.prev
    temp.next = this.tail.prev = null
    this.tail = temp
    return this
  }
}