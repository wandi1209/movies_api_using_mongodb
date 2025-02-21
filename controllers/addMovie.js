const mongoose = require("mongoose");

const addMovie = async (req, res) => {
  const moviesModel = mongoose.model("movies");

  const { movie_name, info, rating } = req.body;

  //Validations...
  if (!info) throw "Info is required!";
  if (!rating) throw "Rating is required!";
  if (rating < 1 || rating > 10) throw "Rating must be between 1-10";

  const createdMovie = await moviesModel.create({
    movie_name: movie_name,
    info: info,
    rating: rating,
  });

  res.status(200).json({
    status: "success",
    message: "Movie added successfully",
  });
};

module.exports = addMovie;
