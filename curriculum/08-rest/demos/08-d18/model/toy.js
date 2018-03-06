'use strict'

const uuid = require('uuid/v4')

module.exports = function(name, desc) {
  this._id = uuid()
  this.name = name
  this.desc = desc
}