'use strict'

const User = require('../../model/user')
const Photo = require('../../model/photo')
const Gallery = require('../../model/gallery')
const faker = require('faker')

const mocks = module.exports = {}
mocks.user = {}
mocks.gallery = {}
mocks.photo = {}

mocks.user.createOne = function() {
  this.result = {}
  this.result.password = faker.internet.password()
  
  let user = new User({
    username: faker.internet.userName(),
    email: faker.internet.email()
  })

  return user.generatePasswordHash(this.result.password)
  .then(user => {
    this.result.user = user
    return user.save()
  })
  .then(user => user.generateToken())
  .then(token => {
    this.result.token = token
    return this.result
  })
}

mocks.gallery.createOne = function() {
  return mocks.user.createOne()
  .then(userData => this.result = userData)
  .then(userData => {
    return new Gallery({
      name: faker.internet.domainWord(),
      desc: faker.random.words(12),
      userId: userData.user._id
    }).save()
  })
  .then(gallery => {
    this.result.gallery = gallery
    return this.result
  })
}

// mocks.photo.createOne = function() {
//   return mocks.gallery.createOne()
//   .then(data => this.result = data)
//   .then(data => {
//     // return new Photo
//   })
// }

mocks.photo.removeAll = function() {
  return Promise.all([
    Photo.remove()
  ])
}
mocks.gallery.removeAll = function() {
  return Promise.all([
    Gallery.remove()
  ])
}
mocks.user.removeAll = function() {
  return Promise.all([
    User.remove()
  ])
}

mocks.truncateDB = function() {
  return Promise.all([
    Photo.remove(),
    Gallery.remove(),
    User.remove()
  ])
}