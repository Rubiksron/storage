'use strict'

const server = require('../server')
const expect = require('chai').expect
const net = require('net')

describe('Server instance', function() {
  before(done => {
    server.listen(3000)
    done()
  })

  describe('new client joins chat', function() {
    it('should notify other users that a new user has joined', done => {
      let client = net.connect({port: 3000}, () => {
        client.on('data', function(data) {
          expect(data.toString()).to.include('has joined the channel')
        })
        client.end()
        done()
      })
    })
  })

  describe('client leaves the chat', function() {
    it('should notify other users that a user has left the chat', done => {
      let client1 = net.connect({port: 3000}, () => {
        client1.write('/quit')
      })

      let client2 = net.connect({port: 3000}, () => {
        client2.on('data', function(data) {
          expect(data.toString()).to.include('has left the room')
        })
        client1.end()
        client2.end()
        done()
      })
    })
  })

  describe('bad whack command', function() {
    it('should respond with an invalid command statement', done => {
      let client = net.connect({port: 3000},  () => {
        client.write('Test')
        client.on('data', function(data) {
          expect(data.toString()).to.be.include('Try: /all <message>')
        });
        client.end()
        done()
      });
    })
  })

  describe('/nick command', function() {
    it('should change the client nickname', done => {
      let client = net.connect({port: 3000}, () => {
        client.write('/nick Randy')
        client.on('data', function(data) {
          expect(data.toString()).to.include('Nickname changed to Randy')
        })
        client.end()
        done()
      })
    })
  })

  describe('/dm command', function() {
    it('should direct message a specific user', done => {
      let client1 = net.connect({port: 3000}, () => {
        client1.on('data', function(data) {
          expect(data.toString()).to.include('(DM)')
        })
      })

      let client2 = net.connect({port: 3000}, () => {
        client1.write('/nick Will')
        client2.write('/dm nick Hello!')
        done()
      })
    });
  });

  after(done => {
    server.close()
    done()
  })
})
