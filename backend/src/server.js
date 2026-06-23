require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const dishRoutes = require("./routes/dishRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/dishes", dishRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Dish Dashboard API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});