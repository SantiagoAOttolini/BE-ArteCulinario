const express = require("express");
const Food = require("../../models/Food");
const router = express.Router();

router.post("/addFood", (req, res) => {
  const food = new Food(req.body);

  food.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

module.exports = router;
