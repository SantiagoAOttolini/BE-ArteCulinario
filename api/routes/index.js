const express = require('express')
const user = require('./user')

const router = express.Router()

router.use('/api/public/uploads', express.static('api/public/uploads'))

router.use('/api/user', user)
module.exports = router