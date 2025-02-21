const mongoose = require("mongoose");

const deleteMovie = async (req, res) => {
  const movieModel = mongoose.model("movies");

  const movie_id = req.params.movie_id;

  const getMovie = await movieModel.findOne({
    _id: movie_id,
  });

  if (!getMovie) throw "Movie id doesn't exists";

  await movieModel.deleteOne({
    _id: movie_id,
  });

  res.status(200).json({
    status: "success",
    message: "Movie deleted successfully!",
  });
};
module.exports = deleteMovie;
