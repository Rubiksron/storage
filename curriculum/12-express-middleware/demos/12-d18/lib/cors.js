'use strict'

const debug = require('debug')('express:cors')

module.exports = function(req, res, next) {
  debug('setting CORS headers')
  res.append('Allow-Control-Access-Origin', '*')
  res.append('Allow-Control-Access-Headers', '*')
  next()
}