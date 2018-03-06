'use strict'

const mongoose = require('mongoose')
const {S3} = require('aws-sdk')

const s3 = new S3()

const articleSchema = mongoose.Schema({
  userID: {type: mongoose.Schema.Types.ObjectId, required: true},
  title: {type: String, required: true, minlength: 1},
  content: {type: String, required: true, minlength: 1},
  photoURI: {type: String, required: true, minlength: 1},
})

articleSchema.pre('remove', function(next){
  let Key = this.photoURI.split('/').pop() 
  if(!Key)
    return next(new Error('unable to delete s3 object'))

  console.log('about to delete s3 object', Key)
  s3.deleteObject({
    Key,
    Bucket: process.env.AWS_BUCKET,
  })
  .promise()
  .then(() => next())
  .catch(next)
});

module.exports = mongoose.model('article', articleSchema)
