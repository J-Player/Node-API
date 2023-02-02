const express = require('express')
const server = express()
const cors = require('cors')

server.set(cors())
server.set(express.json())

const conn = require('./db/conn')
conn()

const routes = require('./routes/router')
server.use('/api', routes)

server.listen(3000, () => {
    console.log('Server online!')
})