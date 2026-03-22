const { PeerServer } = require('peer')
const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('PeerJS server is running ✅'))

const server = require('http').createServer(app)

const peerServer = PeerServer({
  port: process.env.PORT || 9000,
  path: '/peerjs',
  allow_discovery: true,
})

console.log('PeerJS server running on port', process.env.PORT || 9000)
