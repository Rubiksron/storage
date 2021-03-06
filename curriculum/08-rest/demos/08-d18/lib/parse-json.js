'use strict'

const debug = require('debug')('http:parse-json')

module.exports = function(req) {
  return new Promise((resolve, reject) => {
    debug('#parse-json')

    if(req.method === 'POST' || req.method === 'PUT') {
      let body = ''
      req.on('data', data => body += data.toString())
      req.on('end', () => {
        try {
          req.body = JSON.parse(body)
          debug(req.body)
          resolve(req)
        } catch(e) {
          console.error(e)
          reject(e)
        }
      })
      req.on('error', reject)
      return
    }
    
    resolve()
  })
}