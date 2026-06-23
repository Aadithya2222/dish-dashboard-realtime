const Dish = require("../models/Dish");

// GET all dishes
const getAllDishes = async (req, res) => {
  try {
    const dishes = await Dish.find().sort({ dishId: 1 });

    res.status(200).json(dishes);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Toggle publish status
const toggleDish = async (req, res) => {
  try {
    const { id } = req.params;

    const dish = await Dish.findOne({ dishId: Number(id) });

    if (!dish) {
      return res.status(404).json({
        message: "Dish not found"
      });
    }

    dish.isPublished = !dish.isPublished;

    await dish.save();

    res.status(200).json({
      success: true,
      updatedDish: dish
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {
  getAllDishes,
  toggleDish
};