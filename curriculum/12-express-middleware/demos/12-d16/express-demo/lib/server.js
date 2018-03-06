'use strict';


// npm deps
const cors = require('cors')
const morgan = require('morgan')
const express = require('express')
const mongoose = require('mongoose')

// app deps
// configure mongoose and connect to database
mongoose.Promise = Promise
mongoose.connect(process.env.MONGODB_URI)

// server
const app = express();
let server;
//   add middleware
app.use(cors())
app.use(morgan('dev'))

//   add routes
app.use(require('../route/note-router.js'))
//   add error middleware
app.use(require('./error-middleware.js'))

//   export serverControl
const serverControl = module.exports = {}
serverControl.start = () => {
  return new Promise((resolve, reject) => {
    if(!server || !server.isOn){
      server = app.listen(process.env.PORT, () => {
        console.log('server up', process.env.PORT)
        server.isOn = true
        resolve()
      })
      return 
    }
    reject()
  })
}

serverControl.stop = () => {
  return new Promise((resolve, reject) => {
    if(server && server.isOn){
      server.close(() => {
        console.log('server down')
        server.isOn = false 
        resolve()
      })
      return 
    }
    reject()
  })

}
