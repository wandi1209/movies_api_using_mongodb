const mongoose = require("mongoose");

const editMovie = async (req, res) => {
  const moviesModel = mongoose.model("movies");

  const { movie_id, movie_name, info, rating } = req.body;

  if (!movie_id) throw "Movie id is required!";

  await moviesModel.updateOne(
    {
      _id: movie_id,
    },
    {
      movie_name: movie_name,
      rating: rating,
      info: info,
    },
    {
      runValidators: true,
    }
  );

  res.status(200).json({
    status: "success",
    message: "Movie updated successfully!",
  });
};

module.exports = editMovie;
