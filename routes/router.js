const router = require('express').Router()

//import others routes
const userRoutes = require('./userRoutes')

router.use('/', userRoutes)

module.exports = router