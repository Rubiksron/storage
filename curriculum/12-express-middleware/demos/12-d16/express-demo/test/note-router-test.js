'use strict';

require('dotenv').config({path: `${__dirname}/../.test.env`})

// npm modules
const expect = require('expect')
const superagent = require('superagent')

// app modules
const Note = require('../model/note.js')
const server = require('../lib/server.js')


let tempNote
const API_URL = process.env.API_URL

describe('testing note router', () => {
  before(server.start)
  after(server.stop)

  describe('testing POST /api/notes', () => {
    after(() => Note.remove({}))

    let data = {
      title: 'hello note',
      content: 'hello world',
    }

    it('should respond with a note and 200 status', () => {
      return superagent.post(`${API_URL}/api/notes`)
      .send(data)
      .then(res => {
        expect(res.status).toEqual(200)
        expect(res.body._id).toExist()
        expect(res.body.timestamp).toExist()
        expect(res.body.title).toEqual(data.title)
        expect(res.body.content).toEqual(data.content)
      })
    })

    // 400 because no body
    it('should respond with a 400', () => {
      return superagent.post(`${API_URL}/api/notes`)
      .catch(res => {
        expect(res.status).toEqual(400)
      })
    })

    // 400 because no content
    it('should respond with a 400', () => {
      return superagent.post(`${API_URL}/api/notes`)
      .send({title: 'kjsdflj'})
      .catch(res => {
        expect(res.status).toEqual(400)
      })
    })

    // 400 because no title
    it('should respond with a 400', () => {
      return superagent.post(`${API_URL}/api/notes`)
      .send({content: 'kjsdfljslfkjlsdfkj'})
      .catch(res => {
        expect(res.status).toEqual(400)
      })
    })

    // 400 because content length is < 10
    it('should respond with a 400', () => {
      return superagent.post(`${API_URL}/api/notes`)
      .send({title: 'hello ', content: 'hah'})
      .catch(res => {
        expect(res.status).toEqual(400)
      })
    })

    // 409 because it has the same title twice and the model says it should 
    // be unique
    it('should respond with a 409', () => {
      return superagent.post(`${API_URL}/api/notes`)
      .send(data)
      .catch(res => {
        expect(res.status).toEqual(409)
      })
    })
  })

  describe('testing GET /api/notes/:id', () => {
    var tempNote;

    afterEach(() => Note.remove({}))
    beforeEach(() => {
      return new Note({
        title: 'hello world',
        content: 'lsakjf laksjf lkajsdf lkjasflkjasf'
      })
      .save()
      .then(note => {
        tempNote = note;
      })
    })

    it('should respond with a note', () => {
      console.log('tempNote', tempNote)
      return superagent.get(`${API_URL}/api/notes/${tempNote._id}`)
      .then(res => {
        expect(res.status).toEqual(200)
        expect(res.body._id).toEqual(tempNote._id)
        expect(res.body.content).toEqual(tempNote.content)
        expect(res.body.title).toEqual(tempNote.title)
        expect(new Date(res.body.timestamp)).toEqual(tempNote.timestamp)
      })
    })
  })

  describe('testing PUT /api/notes/:id', () => {
    afterEach(() => Note.remove({}))
    beforeEach(() => {
      return new Note({
        title: 'hello world',
        content: 'lsakjf laksjf lkajsdf lkjasflkjasf'
      })
      .save()
      .then(note => {
        tempNote = note;
      })
    })

    it('should respond with a note', () => {
      console.log('tempNote', tempNote)
      return superagent.put(`${API_URL}/api/notes/${tempNote._id}`)
      .send({content: 'hello this is cool'})
      .then(res => {
        expect(res.status).toEqual(200)
        expect(res.body._id).toEqual(tempNote._id)
        expect(res.body.content).toEqual('hello this is cool')
        expect(res.body.title).toEqual(tempNote.title)
        expect(new Date(res.body.timestamp)).toEqual(tempNote.timestamp)
      })
    })

    it('should respond with a note', () => {
      console.log('tempNote', tempNote)
      return superagent.put(`${API_URL}/api/notes/${tempNote._id}`)
      .send({content: 'hehe'})
      .catch(res => {
        expect(res.status).toEqual(400)
      })
    })
  })

  describe('testing DELETE /api/notes/:id', () => {
    afterEach(() => Note.remove({}))
    beforeEach(() => {
      return new Note({
        title: 'hello world',
        content: 'lsakjf laksjf lkajsdf lkjasflkjasf'
      })
      .save()
      .then(note => {
        tempNote = note;
      })
    })

    it('should delete a note', () => {
      console.log('tempNote', tempNote)
      return superagent.delete(`${API_URL}/api/notes/${tempNote._id}`)
      .then(res => {
        expect(res.status).toEqual(204)
      })
    })

    it('bad id should respond with a 404', () => {
      console.log('tempNote', tempNote)
      return superagent.delete(`${API_URL}/api/notes/12134`)
      .catch(res => {
        expect(res.status).toEqual(404)
      })
    })
    it('bad id should respond with a 404', () => {
      console.log('tempNote', tempNote)
      return superagent.delete(`${API_URL}/api/notes/5952a8d5c1b8d566a64ea23f`)
      .catch(res => {
        expect(res.status).toEqual(404)
      })
    })
  })
})












