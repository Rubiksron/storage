'use strict'

const debug = require('debug')('http:router')
const parseUrl = require('./parse-url')
const parseJson = require('./parse-json')
const response = require('./response')

const Router = module.exports = function() {
  this.routes = {
    GET: {},
    POST: {},
    PUT: {},
    DELETE: {}
  }
}

Router.prototype.get = function(endpoint, callback) {
  this.routes.GET[endpoint] = callback
}

Router.prototype.post = function(endpoint, callback) {
  this.routes.POST[endpoint] = callback
}

Router.prototype.put = function(endpoint, callback) {
  this.routes.PUT[endpoint] = callback
}

Router.prototype.delete = function(endpoint, callback) {
  this.routes.DELETE[endpoint] = callback
}

Router.prototype.route = function() {
  return (req, res) => {
    Promise.all([
      parseUrl(req),
      parseJson(req)
    ])
    .then(() => {
      if(typeof this.routes[req.method][req.url.pathname] === 'function') {
        this.routes[req.method][req.url.pathname](req, res)
        return
      }

      response.sendText(res, 400, 'route not found')
    })
    .catch(err => response.sendText(res, 400, 'bad request; something went wrong in the router'))
  }
}