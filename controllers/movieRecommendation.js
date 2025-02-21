const movieRecommendation = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Open AI suggestion",
  });
};

module.exports = movieRecommendation;
