'use strict'

const User = require('../../model/user')
const faker = require('faker')

const mocks = module.exports = {}
mocks.user = {}

mocks.user.createOne = function() {
  let user = {}
  result.password = faker.internet.password()
  return new User({
    username: faker.internet.userName(),
    email: faker.internet.email()
  })
  .generatePasswordHash(result.password)
  .then(user => {
    result.user = user
    return user.generateToken()
  })
  .then(token => {
    result.token = token
    return result
  })
}

mocks.user.removeAll = function() {
  return Promise.all([
    User.remove()
  ])
}