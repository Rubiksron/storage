'use strict'

const debug = require('debug')('express:route-note')
const Note = require('../model/note')

module.exports = function(router) {
  debug('#Note Routes')

  router.post('/api/note', (req, res, next) => {
    debug('/api/note POST')
    Note.createNote(req.body)
    .then(note => res.status(201).json(note))
    .catch(next)
  })

  router.get('/api/note/:_id', (req, res, next) => {
    debug('/api/note/:_id GET')

  })

  router.get('/api/note', (req, res, next) => {
    debug('/api/note GET')

  })

  router.put('/api/note/:_id', (req, res, next) => {
    debug('/api/note/:_id PUT')

  })

  router.delete('/api/note/:_id', (req, res, next) => {
    debug('/api/note/:_id DELETE')

  })

}