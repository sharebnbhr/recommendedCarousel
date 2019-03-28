const RecommendedCarousel = require('../database/index');

const controller = {
  get: (req, res) => {
    RecommendedCarousel.find({})
      .limit(9)
      .then(results => {
        res.status(200).send(results);
      })
      .catch(err => console.error(err));
  }
};

module.exports = controller;
