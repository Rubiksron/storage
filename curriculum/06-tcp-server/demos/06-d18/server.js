'use strict'

const Client = require('./model/client.js')
const EE = require('events').EventEmitter
const net = require('net')
const ee = new EE()
const server = module.exports = net.createServer()
const PORT = process.env.PORT || 3000

const pool = []

ee.on('default', (client, string) => {
  client.socket.write(`
    Unknown command: ${string.split(' ')[0]}\nTry: /all <message>\n`)
})

ee.on('/all', (client, string) => pool.forEach(c => c.socket.write(`${client.nickName}: ${string}\n`)))
ee.on('/dm', function(client, string) {
  let nickname = string.split(' ').shift().trim();
  let message = string.split(' ').slice(1).join(' ').trim();

  pool.forEach(c => {
    if(c.nickName === nickname) c.socket.write(`${client.nickName}: ${message}\n`)
  });
});

ee.on('/nick', function(client, string) {
  client.nickName = string.trim()
  client.socket.write(`Nickname changed to ${client.nickName}\n`);
});

ee.on('/quit', function(client) {
  let i = pool.indexOf(client);
  pool[i].socket.end();
  if (i != -1) pool.splice(i, 1);
  pool.forEach( c => c.socket.write(`${client.nickName} has left the room.\n`));
});

server.on('connection', socket => {
  let client = new Client(socket)
  pool.push(client)
  pool.forEach(c => c.socket.write(`${client.nickName} has joined the channel\n`))

  socket.on('data', data => {
    let cmd = data.toString().split(' ').shift().trim()
    if(cmd.startsWith('/')) {
      ee.emit(cmd, client, data.toString().split(' ').slice(1).join(' '))
      return
    }

    ee.emit('default', client, data.toString())
  })

  socket.on('close', data => ee.emit('/quit', client, data.toString()))
  socket.on('error', err => console.error(err))
})

server.listen(PORT, () => console.log(`Listening on port ${PORT}`))
