const express = require('express')
const { ExpressPeerServer } = require('peer')
const http = require('http')

const app = express()
const server = http.createServer(app)

app.get('/', (req, res) => res.send('PeerJS signaling server is running ✅'))

const peerServer = ExpressPeerServer(server, {
  path: '/',
  allow_discovery: true,
})

app.use('/peerjs', peerServer)

const PORT = process.env.PORT || 9000
server.listen(PORT, () => {
  console.log(`PeerJS server running on port ${PORT}`)
})
