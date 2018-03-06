'use strict'

const Promise = require('bluebird')
const debug = require('debug')('express:storage')
const fs = Promise.promisifyAll(require('fs'), { suffix: 'Prom' })

const storage = module.exports = {}

storage.create = function(item) {
  debug('#create')

  let json = JSON.stringify(item)
  return fs.writeFileProm(`${__dirname}/../data/note/${item._id}.json`, json)
  .then(newItem => newItem)
  .catch(err => console.error(err))
}

storage.fetchOne = function(id) {
  debug('#fetchOne')

}

storage.fetchAll = function() {
  debug('#fetchAll')

}

storage.update = function(id, item) {
  debug('#update')

}

storage.destroy = function(id) {
  debug('#destroy')

}
