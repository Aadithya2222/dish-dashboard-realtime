const express = require("express");

const {
  getAllDishes,
  toggleDish
} = require("../controllers/dishController");

const router = express.Router();

router.get("/", getAllDishes);

router.patch("/:id/toggle", toggleDish);

module.exports = router;