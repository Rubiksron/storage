'use strict'

const Node = require('./node')

module.exports = class {
  constructor() {
    this.head = null
  }

  prepend(val) {
    let node = new Node(val)
    if(!this.head) {
      this.head = node
      return this
    }
    node.next = this.head
    this.head = node
    return this
  }

  append(val) {
    let node = new Node(val)
    let lastNode

    if(!this.head) {
      this.head = node
      return this
    }
    _setLastNode(this.head)
    lastNode.next = node
    return this

    function _setLastNode(node) {
      if (!node) return
      lastNode = node
      _setLastNode(node.next)
    }
  }

  insertNth(val, n) {

  }

  removeHead() {
    if(!this.head) return null
    let temp = this.head.next
    this.head.next = null
    this.head = temp
  }

  removeLast() {
    let secondToLast
    
    _setSecondToLast(this.head)

    function _setSecondToLast(node) {
      if(!node.next) return
      secondToLast = node.next
      _setSecondToLast(node.next)
    }
  }
}