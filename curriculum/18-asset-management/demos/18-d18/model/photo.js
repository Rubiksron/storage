'use strict'

const fs = require('fs')
const del = require('del')
const path = require('path')
const Gallery = require('./gallery')
const mongoose = require('mongoose')
const tempDir = `${__dirname}/../temp`
const awsS3 = require('../lib/aws-s3')
const debug = require('debug')('cfgram:Photo')

const Photo = mongoose.Schema({
  name: { type: String, required: true },
  desc: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'user' },
  galleryId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'gallery' },
  imageURI: { type: String, required: true, unique: true },
  objectKey: { type: String, required: true, unique: true }
}, { timestamps: true })

Photo.statics.upload = function(req) {
  return new Promise((resolve, reject) => {
    if(!req.file) return reject(new Error('multi-part form-data failed; file not present for create'))
    if(!req.file.path) return reject(new Error('multi-part form-data failed; file path not present for create'))
  
    let params = {
      ACL: 'public-read',
      Bucket: process.env.AWS_BUCKET,
      Key: `${req.file.filename}${path.extname(req.file.originalname)}`,
      Body: fs.createReadStream(req.file.path)
    }
  
    return awsS3.uploadProm(params)
    .then(s3Data => {
      del([`${tempDir}/*`])

      let photoData = {
        name: req.body.name,
        desc: req.body.desc,
        objectKey: s3Data.Key,
        imageURI: s3Data.Location,
        userId: req.user._id,
        galleryId: req.body.galleryId
      }

      resolve(photoData)
    })
    .catch(reject)
  })
}

// Photo.methods.update = function(req) {
//   return new Promise((resolve, reject) => {
//     if(!req.file) return reject(new Error('form-data failed; file not present for update'))
    
//     debug('inside update prom')

//     let params = {
//       ACL: 'public-read',
//       Bucket: process.env.AWS_BUCKET,
//       Key: this.objectKey,
//       Body: fs.createReadStream(req.file.path)
//     }

//     return awsS3.updateProm(params)
//     .then(s3Data => {
//       del([`${dataDir}/*`])

//       let name = req.body.name || this.name
//       let desc = req.body.desc || this.desc
//       let objectKey = s3Data.Key || this.objectKey
//       let imageURI = s3Data.Location || this.imageURI
//       let userId = req.body.userId || this.userId
//       let galleryId = req.body.galleryId || this.galleryId

//       let photoData = { name, desc, objectKey, imageURI, userId, galleryId }

//       debug(`photoData ${photoData}`)

//       resolve(photoData)
//     })
//     .catch(reject)
//   })
// }

Photo.methods.delete = function() {
  return new Promise((resolve, reject) => {
    let params = {
      Bucket: process.env.AWS_BUCKET,
      Key: this.objectKey
    }

    return awsS3.deleteProm(params)
    .then(this.remove)
    .then(resolve)
    .catch(reject)
  })
}

module.exports = mongoose.model('photo', Photo)