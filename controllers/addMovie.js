const addMovie = (req, res) => {
  const { movie_name, info, rating } = req.body;

  res.status(200).json({
    status: "success",
    message: "Movie added successfully",
  });
};

module.exports = addMovie;
