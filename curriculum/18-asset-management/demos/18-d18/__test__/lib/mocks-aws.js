// 'use strict'

// const AWS = require('aws-sdk-mock')

// module.exports = exports = {}

// exports.uploadMock = {
//   ETag: '"1234abcd"',
//   Location: 'https://mockurl.com/mock.png',
//   Key: '1234.png',
//   key: '1234.png',
//   Bucket: 'cfgram'
// }

// AWS.mock('S3', 'upload', function (params, cb) {
//   if(!params.ACL === 'public-read') return cb(new Error('ACL must be public-read'))
//   if(!params.Bucket === 'cfgram') return cb(new Error('Bucket must be cfgram'))
//   if(!params.Key) return cb(new Error('Key required'))
//   if(!params.Body) return cb(new Error('Body required'))
//   cb(null, exports.uploadMock)
// })