const express = require('express')
const server = express()
const cors = require('cors')
const connectDB = require('./db/connection')
const routes = require('./routes/router')

server.use(cors())
server.use(express.json())
server.use('/api', routes)

const USER_DB = process.env.userdb || 'root'
const PASS_DB = process.env.passdb || 'example'
const HOST_DB = process.env.hostdb || 'localhost'
const PORT_DB = process.env.portdb || 27017

const PORT = process.env.port || 3000

connectDB(USER_DB, PASS_DB, HOST_DB, PORT_DB)

server.listen(PORT, () => {
    console.log('Server online!')
})