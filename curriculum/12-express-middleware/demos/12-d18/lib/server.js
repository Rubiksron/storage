'use strict'

const cors = require('./cors')
const express = require('express')
const bodyParser = require('body-parser').json()
const errorMiddleware = require('./error-middleware')
const debug = require('debug')('express:server')

const app = module.exports = express()
const router = express.Router()

app.use(bodyParser())
app.use(cors)

require('../route/route-note')(router)

app.use(router)
app.use(errorMiddleware)

// router.stack.forEach(layer => {
//   console.log(`${layer.route.stack[0].method.toUpperCase()}: ${layer.route.path}`)
//   // console.log(layer.route.stack[0]);
// })