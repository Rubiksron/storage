'use strict'

const debug = require('debug')('http:response')

let response = module.exports = {}

response.sendJson = function(res, status, data) {
  debug('#sendJson')
  res.writeHead(status, {'Content-Type': 'application/json'})
  res.write(JSON.stringify(data))
  res.end()
}

response.sendText = function(res, status, message) {
  debug('#sendText')
  res.writeHead(status, {'Content-Type': 'text/plain'})
  res.write(message)
  res.end()
}