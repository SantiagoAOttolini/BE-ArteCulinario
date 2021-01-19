const express = require('express')
const food = require('./Food/foodIndex')
const user = require('./Users/users')
const businessFood = require('./Gastronomy-Locals/businessIndex')
const pay = require('./Pays/Pays')

const router = express.Router()

router.use('/public/uploads', express.static('server/public/uploads'))

router.use('/api/users', user)
router.use('/api/food', food)
router.use('/api/gastronomy', businessFood)
router.use('/api/checkout', pay)

module.exports = router
