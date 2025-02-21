const mongoose = require("mongoose");

const deleteMovie = async (req, res) => {
  const movieModel = mongoose.model("movies");

  const movie_id = req.params.movie_id;

  const getMovie = await movieModel.findOne({
    _id: movie_id,
  });

  try {
    if (!getMovie) throw "Movie id doesn't exists";
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error,
    });
    return;
  }

  try {
    await movieModel.deleteOne({
      _id: movie_id,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error.message,
    });
    return;
  }

  res.status(200).json({
    status: "success",
    message: "Movie deleted successfully!",
  });
};
module.exports = deleteMovie;
