'use strict'

const superagent = require('superagent')
const server = require('../lib/server.js')
const expect = require('expect')

describe('testing GET /hello', () => {
  before((done) => {
    server.listen(3000, () => done())
  })

  after((done) => {
    server.close(() => done())
  })

  it('should respond with "hello world"', (done) => {
    superagent.get('localhost:3000/hello')
    .end((err, res) => {
      if(err) return done(err)
      expect(res.text).toEqual('hello world')
      done()
    })
  })
})

