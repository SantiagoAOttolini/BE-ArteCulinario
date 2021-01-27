const express = require('express')

const router = express.Router()
const Food = require('../../models/Food')
const Reward = require('../../models/BusinessFood')

router.post('/addFood', (req, res) => {
  const food = new Food(req.body)

  food.save((err, doc) => {
    if (err) return res.json({ success: false, err })
    return res.status(200).json({
      success: true
    })
  })
})

router.post('/addReward', (req, res) => {
  const reward = new Reward(req.body)

  reward.save((err, doc) => {
    if (err) return res.json({ success: false, err })
    return res.status(200).json({
      success: true
    })
  })
})

module.exports = router
