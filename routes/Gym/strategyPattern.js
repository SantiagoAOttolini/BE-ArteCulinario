const express = require("express");
const router = express.Router();
const { Gym } = require("../../models/Gym");

router.post("/addGym", (req, res) => {
  const gym = new Gym({
    photo:"public/images/gyms/Atlon.PNG",
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    price: req.body.price,
    adress: req.body.adress,
  });

  gym.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

/* router.get("/getGym", (req, res) => {
  Gym.find()
    .populate("_id")
    .exec((err, gym) => {
      if (err) return res.status(400).send(err);
      res.status(200).json({ success: true, data: gym });
    });
});

router.get("/getGymById", (req, res) => {
  Gym.find({ ID: req.params._id }).exec((err, gyms) => {
    if (err) return res.status(400).send(err);
    return res.status(200).json({ success: true, gyms });
  });
}); */

/////////////////////// Strategy pattern to calculate gym price ///////////////////
function megatholGym() {
  const discount = 20;
  return discount;
}
function athlonGym() {
  const discount = 15;
  return discount;
}
function imperioGym() {
  const discount = 10;
  return discount;
}

router.post("/gymContextPrice", (req, res) => {
  const gymPrice = req.body.price;
  const gymName = req.body.name;
  let total=0;
  console.log("nombre:", gymName, "precio:", gymPrice);

  if (gymName === "Megatlon") {
    const discount = megatholGym();
    total = (gymPrice * discount) / 100;
  }
  if (gymName === "Atlon") {
    const discount = athlonGym();
    total = (gymPrice * discount) / 100;
  }
  if (gymName === "Imperio") {
    const discount = imperioGym();
    total = (gymPrice * discount) / 100;
  }
  console.log(total);

  return res.status(200).json({
    success: true,
    msg: "Precio calculado",
    data: total,
  });
});
module.exports = router;
