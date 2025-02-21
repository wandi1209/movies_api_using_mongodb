const mongoose = require("mongoose");

const editMovie = async (req, res) => {
  const moviesModel = mongoose.model("movies");

  const { movie_id, movie_name, info, rating } = req.body;

  try {
    if (!movie_id) throw "Movie id is required!";
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error,
    });
    return;
  }

  try {
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
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error.message,
    });
    return;
  }

  res.status(200).json({
    status: "success",
    message: "Movie updated successfully!",
  });
};

module.exports = editMovie;
