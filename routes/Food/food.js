const Food = require('../../models/Food')

const getAll = (req, res) => {
  Food.find({}, (err, products) => {
    if (err) res.send({ msg: 'can`t get the user list', error: err })
    res.send(products)
  })
}

const getById = (req, res) => {
  Food.findById(req.params.id, (err, recipes) => {
    if (err)
      res.send({ msg: `Cant't get the product ${req.params.id}`, error: err })
    res.send(recipes)
  })
}
const insert = (req, res) => {
  const food = new Food({
    photo: 'public/uploads/guisoLentejas.jpg',
    name: req.body.name,
    description: req.body.description,
    Category: req.body.Category
  })
  food.save(err => {
    if (err) res.send({ msg: 'Cant`t save the Recipe', error: err })
    res.send({ msg: 'Recipe saved', data: recipe })
  })
}

const remove = (req, res) => {
  Food.findOneAndDelete({ _id: req.params.id }, (err, doc) => {
    if (err) return res.status(500).send(err)
    res.status(200).send(doc)
  })
}

module.exports = {
  getAll,
  getById,
  insert,
  remove
}
