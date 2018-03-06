'use strict'

const uuid = require('node-uuid')

module.exports = function(socket) {
  this.socket = socket
  this.userName = `user_${Math.random()}`
  this.nickName = uuid.v4()
}
