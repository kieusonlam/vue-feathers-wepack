'use strict'

const app = require('./app')
const api = require('./api')
const port = app.get('port')
const server = app.listen(port)
api.setup(server)

server.on('listening', () =>
  console.log(`Feathers application started on ${app.get('host')}:${port}`)
)
