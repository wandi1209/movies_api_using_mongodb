const addMovie = (req, res) => {
  const { movie_name, info, rating } = req.body;

  //Validations...
  if (!movie_name) {
    res.status(400).json({
      status: "failed",
      message: "Movie name must be provided!",
    });
    return;
  }
  if (!info) {
    res.status(400).json({
      status: "failed",
      message: "Info must be provided!",
    });
    return;
  }
  if (!rating) {
    res.status(400).json({
      status: "failed",
      message: "Rating must be provided!",
    });
    return;
  }
  if (rating < 1 || rating > 10) {
    res.status(400).json({
      status: "failed",
      message: "Rating must be between 1-10",
    });
    return;
  }

  res.status(200).json({
    status: "success",
    message: "Movie added successfully",
  });
};

module.exports = addMovie;
