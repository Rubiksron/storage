'use strict'

const uuid = require('uuid/v4')
const storage = require('../lib/storage')
const createError = require('http-errors')
const debug = require('debug')('express:Note')

const Note = module.exports = function(name, content) {
  debug('#instantiate')

  if(!name) return createError(400, 'name required to create resource: Note')
  if(!content) return createError(400, 'content required to create resource: Note')

  this.name = name
  this.content = content
  this._id = uuid()
}


Note.createNote = function(_note) {
  debug('#createNote')

  try {
    let note = new Note(_note.name, _note.content)
    return storage.create(note)
  } catch(e) {
    return Promise.reject(e)
  }
}

Note.getNote = function(_id) {
  debug('#getNote')

}

Note.allNotes = function() {
  debug('#allNotes')

}

Note.updateNote = function(_id, _note) {
  debug('#updateNote')

}

Note.removeNote = function(_id) {
  debug('#removeNote')

}
