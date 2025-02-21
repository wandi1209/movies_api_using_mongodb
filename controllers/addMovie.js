const mongoose = require("mongoose");

const addMovie = async (req, res) => {
  const moviesModel = mongoose.model("movies");

  const { movie_name, info, rating } = req.body;

  //Validations...
  try {
    if (!info) throw "Info is required!";
    if (!rating) throw "Rating is required!";
    if (rating < 1 || rating > 10) throw "Rating must be between 1-10";
  } catch (e) {
    res.status(400).json({
      status: "failed",
      message: e,
    });
    return;
  }

  try {
    const createdMovie = await moviesModel.create({
      movie_name: movie_name,
      info: info,
      rating: rating,
    });
    console.log(createdMovie);
  } catch (e) {
    res.status(400).json({
      status: "failed",
      message: "Movie Creation failed. Something went wrong.",
    });
  }

  res.status(200).json({
    status: "success",
    message: "Movie added successfully",
  });
};

module.exports = addMovie;
