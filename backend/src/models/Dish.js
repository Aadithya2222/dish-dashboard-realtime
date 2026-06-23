const mongoose = require("mongoose");

const dishSchema = new mongoose.Schema({
  dishId: Number,
  dishName: String,
  imageUrl: String,
  isPublished: Boolean
});

module.exports = mongoose.model("Dish", dishSchema);