const express = require('express')
const food = require('./Food/foodIndex')
const user = require('./Users/users')
const businessFood = require('./Gastronomy-Locals/businessIndex')
const pay = require('./Pays/Pays')
const adminFood = require('./AdminFunction/adminFunction')

const router = express.Router()

router.use('/public/uploads', express.static('server/public/uploads'))
router.use(
  '/public/images/beneficios',
  express.static('server/public/images/beneficios')
)
router.use(
  '/public/images/foods',
  express.static('server/public/images/foods/')
)

router.use('/api/users', user)
router.use('/api/food', food)
router.use('/api/gastronomy', businessFood)
router.use('/api/checkout', pay)
router.use('/api/admin', adminFood)

module.exports = router
