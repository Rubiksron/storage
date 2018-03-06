'use strict'

const mocks = require('../lib/mocks')
const User = require('../../model/user')
const superagent = require('superagent')
const Photo = require('../../model/photo')
const server = require('../../lib/server')
const awsMocks = require('../lib/mocks-aws')
const Gallery = require('../../model/gallery')


describe('Testing Photo Routes', function() {
  beforeAll(server.start)
  afterAll(server.stop)
  afterEach(mocks.truncateDB)

  describe('POST to /api/photo', function() {
    describe('Valid Requests', () => {
      test('true', () => expect(true).toBe(true))
    })

    // describe('Invalid Requests', () => {

    // })
  })

  // describe('GET to /api/photo', function() {
  //   describe('Valid Requests', () => {
      
  //   })

  //   describe('Invalid Requests', () => {

  //   })
  // })

  // describe('PUT to /api/photo', function() {
  //   describe('Valid Requests', () => {
      
  //   })

  //   describe('Invalid Requests', () => {

  //   })
  // })

//   describe('DELETE to /api/photo', function() {
//     describe('Valid Requests', () => {
      
//     })

//     describe('Invalid Requests', () => {

//     })
//   })
})

// const exampleUser = {
//   username: 'exampleuser',
//   password: '1234',
//   email: 'exampleuser@test.com'
// }

// const exampleGallery = {
//   name: 'test gallery',
//   desc: 'test gallery description'
// }

// const examplePic = {
//   name: 'example pic',
//   desc: 'example pic description',
//   image: `${__dirname}/data/tester.png`
// }

// const examplePicModel = {
//   name: 'example pic model',
//   desc: 'example pic model description',
//   imageURI: awsMocks.uploadMock.Location,
//   objectKey: awsMocks.uploadMock.Key,
// }
