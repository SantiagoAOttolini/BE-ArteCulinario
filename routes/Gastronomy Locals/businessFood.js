const express = require('express')
const router = express.Router()
const { Business } = require('../../models/BusinessFood')
const { getFind } = require('./fecadeBusiness')

//=================================
//             Fecade Business
//=================================
// the fecade (getFind) in method level , using differents parameters to define the type of action that's
//need to do
/*
router.post('/favoriteNumber', auth, (req, res) => {
  return getFind('/favoriteNumber', auth, req, res)
})

router.post('/favorited', auth, (req, res) => {
  return getFind('/favorited', auth, req, res)
})

router.post('/getFavoredRecipe', (req, res) => {
  return getFind('/getFavoredRecipe', auth, req, res)
})
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

router.post('/addBusiness', (req, res) => {
  console.log(req.body)
  const business = new Business({
    photo: req.body.photo,
    name: req.body.name,
    description: req.body.description,
    Location: req.body.Location,
    HoursOfAtention: req.body.HoursOfAtention,
    Category: req.body.Category
  })
  console.log(business)
  business.save((err, doc) => {
    if (err) return res.json({ success: false, err })
    return res.status(200).json({ success: true })
  })
})

router.post('/removeBusiness', (req, res) => {
  Business.findOneAndDelete({
    _id: req.body.recipeId
  }).exec((err, doc) => {
    if (err) return res.status(400).json({ success: false, err })
    res.status(200).json({ success: true, doc })
  })
})

module.exports = router
