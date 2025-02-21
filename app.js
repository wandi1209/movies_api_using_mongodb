const express = require("express");
require("dotenv").config();

const addMovie = require("./controllers/addMovie");
const getAllMovies = require("./controllers/getAllMovies");
const getSingleMovie = require("./controllers/getSingleMovie");
const editMovie = require("./controllers/editMovie");

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

app.use(express.json());

// Models
require("./models/movies");

// Routes
app.post("/api/movies", addMovie);
app.get("/api/movies", getAllMovies);
app.get("/api/movies/:movie_id", getSingleMovie);
app.patch("/api/movies", editMovie);

app.listen(8000, () => {
  console.log("Server started!");
});
