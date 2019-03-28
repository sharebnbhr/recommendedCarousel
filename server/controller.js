const RecommendedCarousel = require('../database/index');

const controller = {
  get: (req, res) => {
    res.status(200).send('you have connected to the get');
  }
};

module.exports = controller;
