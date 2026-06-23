require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

const dishRoutes = require("./routes/dishRoutes");

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST", "PATCH"]
  }
});

app.set("io", io);

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

io.on("connection", (socket) => {
  console.log("Client Connected:", socket.id);

  socket.emit("message", "Socket Connected Successfully");

  socket.on("disconnect", () => {
    console.log("Client Disconnected:", socket.id);
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});