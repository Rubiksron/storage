'use strict'

const Toy = require('../model/toy')
const storage = require('../lib/storage')
const debug = require('debug')('http:route-toy')

module.exports = function(router) {
  debug('#route-toy')
  
  router.post('/api/toy', function(req, res) {
    debug('#POST /api/toy')

    try {
      let toy = new Toy(req.body.name, req.body.desc)
      storage.create('toy', toy)
      
      res.writeHead(200, {'Content-Type': 'application/json'})
      res.write(JSON.stringify(toy))
      res.end()
    } catch(e) {
      console.error(e)
      res.writeHead(400, { 'Content-Type': 'text/plain' })
      res.write('bad request')
      res.end()
    }
  })

  router.get('/api/toy', function(req, res) {
    debug('#GET /api/toy')

    if(req.url.query._id) {
      storage.fetchOne('toy', req.url.query._id)
      .then(toy => {
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.write(JSON.stringify(toy))
        res.end()
      })
      .catch(err => {
        res.writeHead(404, {'Content-Type': 'text/plain'})
        res.write('no record found')
        res.end()
      })
      return
    } else {
      storage.fetchAll('toy')
      .then(ids => {
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.write(JSON.stringify(ids))
        res.end()
      })
      .catch(err => {
        res.writeHead(404, {'Content-Type': 'text/plain'})
        res.write('no records found')
        res.end()
      })
      return
    }
  })

  router.put('/api/toy', function(req, res) {
    debug('#PUT /api/toy')

    try {
      storage.update('toy', req.body)
      .then(udpated => {
        res.writeHead(204)
        res.end()
      })
    } catch(e) {
      res.writeHead(400, {'Content-Type': 'application/json'})
      res.write('unable to update record at this time')
      res.end()
    }
  })

  router.delete('/api/toy', function(req, res) {
    debug('#DELETE /api/toy')
    
    try {
      storage.destroy('toy', req.url.query._id)
      .then(() => {
        res.writeHead(204)
        res.end()
      })
    } catch(e) {
      res.writeHead(404, {'Content-Type': 'application/json'})
      res.write('unable to destroy; record not found')
      res.end()
    }
  })
}