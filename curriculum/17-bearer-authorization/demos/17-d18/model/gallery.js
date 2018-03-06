'use strict'

const debug = require('debug')('cfgram:Gallery')
const mongoose =  require('mongoose')

const Gallery = mongoose.Schema({
  name: { type: String, required: true },
  desc: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'user' }
}, { timestamps: true })

Gallery.pre('save', function(next) {
  console.log(this)
  next()
})

module.exports = mongoose.model('gallery', Gallery)