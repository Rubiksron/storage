'use strict';

const storage = require('../lib/storage.js');
const response = require('../lib/response.js');
const Note = require('../model/note.js');

module.exports = function(router) {
  router.get('/api/note', function(req, res) {
    if (req.url.query.id) {
      storage.fetchItem('note', req.url.query.id)
      .then( note => {
         response.sendJSON(res, 200, note);
       })
       .catch( err => {
         response.sendText(res, 404, 'not found');
       });

       return;
     }
     response.sendText(res, 400, 'bad request');
   });

   router.post('/api/note', function(req, res) {
     try {
       var note = new Note(req.body.name, req.body.content);
       storage.createItem('note', note);
       // note - set as the directory (schema name)
       // save the note - get the id off of our note and turn that into a filename
       response.sendJSON(res, 200, note);
     } catch (err) {
       console.error(err);
       response.sendText(res, 400, 'bad request');
     }
   });
 }


