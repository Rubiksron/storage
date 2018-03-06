'use strict'

const debug = require('debug')('cfgram:')

const AWS = require('aws-sdk')
const s3 = new AWS.S3()
AWS.config.setPromisesDependency(require('bluebird'))

const uploads = module.exports = {}

uploads.uploadProm = function(params) {
  debug('#s3UploadProm')
  return new Promise((resolve, reject) => {
    s3.upload(params, (err, s3Data) => {
      if(err) console.error(err)
      resolve(s3Data)
    })
  })
}

// uploads.updateProm = function(params) {
//   return new Promise((resolve, reject) => {
//     s3.putObject(params, (err, s3Data) => {
//       if(err) {
//         console.log(err)
//         reject(err)
//       }
//       console.log(s3Data)
//       resolve(s3Data)
//     })
//   })
// }

uploads.deleteProm = function(params) {
  return new Promise((resolve, reject) => {
    s3.deleteObject(params, (err, s3data) => {
      if(err) return reject((err.stack))
      resolve(s3data)
    })
  })
}