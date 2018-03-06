'use strict'

const superagent = require('superagent')
const server = require('../../server')
require('jest')

describe('Testing toy routes', function() {
  // this.dino = {...}
  afterAll(done => server.close(done))

  describe('all requests to /api/toy', () => {
    describe('POST requests', () => {
      test('should create and return a new toy, given a valid request', done => {
        superagent.post(':3000/api/toy')
        .type('application/json')
        .send({
          name: 'barney',
          desc: 'purple dino'
        })
        .then(res => {
          this.dino = JSON.parse(res.text)
          expect(this.dino.name).toEqual('barney')
          expect(this.dino.desc).toEqual('purple dino')
          expect(res.status).toBe(201)
          done()
        })
      })
    })
    describe('GET requests', () => {
      test('should get the record from the toy dir', done => {
        superagent.get(':3000/api/toy')
        .query({_id: this.dino._id})
        .then(res => {
          let dino = JSON.parse(res.text)
          expect(dino._id).toEqual(this.dino._id)
          done()
        })
      })
    })
    describe('PUT requests', () => {
      test('should have ...', done => {
        expect(true).toBeTrue
        done()
      })
    })
    describe('DELETE requests', () => {
      test('should delete a record given a valid id', done => {
        superagent.delete(':3000/api/toy')
        .query({_id: this.dino._id})
        .then(() => {

          done()
        })
      })
    })
  })
})