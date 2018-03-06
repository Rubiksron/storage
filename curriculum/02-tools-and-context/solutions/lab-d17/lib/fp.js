'use strict'

const fp = module.exports = {}

fp.map = (value, callback) => Array.prototype.map.call(value, callback)
fp.filter = (value, callback) => Array.prototype.filter.call(value, callback)
fp.reduce = (value, callback) => Array.prototype.reduce.call(value, callback)
fp.concat = (a, b) => Array.prototype.concat.apply(a, b)
fp.splice = (value, start, count) => Array.prototype.splice.call(value, start, count)