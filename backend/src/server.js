const dishRoutes = require("./routes/dishRoutes");
app.use(express.json());
app.use("/api/dishes", dishRoutes);
