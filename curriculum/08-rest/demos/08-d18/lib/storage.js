'use strict'

const debug = require('debug')('http:storage')

let storage = module.exports = {}

storage.create = function(schema, toy) {
  debug('#create')
  if(!schema) return Promise.reject(new Error('schema required to create new record'))
  if(!toy) return Promise.reject(new Error('toy required to create new record'))
  if(!storage[schema]) storage[schema] = {}
  
  storage[schema][toy._id] = toy
  return Promise.resolve(toy)
}

storage.fetchOne = function(schema, toyId) {
  debug('#fetchOne')
  
  return new Promise((resolve, reject) => {
    if(!schema) return Promise.reject(new Error('schema required to fetch a record'))
    if(!toy) return Promise.reject(new Error('toy required to fetch a record'))
    if(!storage[schema]) return Promise.reject(new Error('fetch record failed; schema not found'))
    if(!storage[schema][toyId]) return Promise.reject(new Error('toy id required to fetch record'))
      
    resolve(storage[schema][toyId])
  })
}
    
storage.fetchAll = function(schema) {
  debug('#fetchAll')
    
  return new Promise((resolve, reject) => {
    if(!schema) return Promise.reject(new Error('schema required to fetch all records'))
    if(!storage[schema]) return Promise.reject(new Error('fetch records failed; schema not found'))

    let ids = Object.keys(storage[schema])
    if(!ids) return Promise.reject(new Error('fetch records failed; no records found'))

    resolve(ids)
  })
}

storage.update = function(schema, toy) {
  debug('#update')

  if(!schema) return Promise.reject(new Error('schema required to update records'))
  if(!toy) return Promise.reject(new Error('update failed; toy record data required to update'))
  
  storage[schema][toy._id] = toy
  resolve()
}

storage.destroy = function(schema, toyId) {
  debug('#destroy')

  return new Promise((resolve, reject) => {
    if(!schema) return Promise.reject(new Error('schema required to destroy records'))
    if(!toyId) return Promise.reject(new Error('destuction failed; toy id required to remove record'))
    if(!storage[schema]) return Promise.reject(new Error('destruction failed; schema not found'))
    if(!storage[schema][toyId]) return Promise.reject(new Error('destruction failed; toy record does not exist to destroy'))
    
    delete storage[schema][toyId]
    resolve()
  })
}