const addMovie = (req, res) => {
  const { movie_name, info, rating } = req.body;

  //Validations...
  try {
    if (!movie_name) throw "Movie name is required!";
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

  res.status(200).json({
    status: "success",
    message: "Movie added successfully",
  });
};

module.exports = addMovie;
