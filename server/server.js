var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
var route = require('./routes/index')
var server = express()

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/v1/', route)



module.exports = server
