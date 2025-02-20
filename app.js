const express = require("express");
require("dotenv").config();

const addMovie = require("./controllers/addMovie");

const mongoose = require("mongoose");

// Connection to mongodb
mongoose
  .connect(process.env.MONGO_CONNECTION, {})
  .then(() => {
    console.log("db connected!");
  })
  .catch(() => {
    console.log("db failed to connect!");
  });

const app = express();

// Routes
app.post("/api/movies", addMovie);

app.listen(8000, () => {
  console.log("Server started!");
});
