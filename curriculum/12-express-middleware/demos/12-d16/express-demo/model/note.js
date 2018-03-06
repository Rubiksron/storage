'use strict'

const mongoose = require('mongoose')

const noteSchema = mongoose.Schema({
  title: {type: String, required: true, unique: true},
  content: {type: String, required: true, minlength: 10},
  timestamp: {type: Date, default: Date.now},
})

// add instance methods to noteSchema
// add validation
// add hooks to noteSchema

const Note = module.exports = mongoose.model('note', noteSchema)

// add static metods to Note constructor

