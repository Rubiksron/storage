'use strict';

const debug = require('debug')('cowsay:body-parser')

// callback should be (err, body) => undefined 
module.exports = (req, callback) => {
  if(req.method === 'POST' || req.method === 'PUT') {
    let body = ''
    req.on('data', buff => body += buff.toString())
    req.on('end', () => callback(null, body))
    req.on('error', err => callback(err))
  } else callback(null, {})
}