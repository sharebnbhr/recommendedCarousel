const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose
  .connect('mongodb://localhost/recommendedCarousel', { useNewUrlParser: true })
  .then(() => console.log('connected to mongoDB'));

const recommendedCarouselSchema = mongoose.Schema({
  imgUrl: String,
  typeOfBnb: String,
  city: String,
  description: String,
  price: Number,
  reviewNum: Number
});

const RecommendedCarousel = mongoose.model(
  'RecommendedCarousel',
  recommendedCarouselSchema
);

module.exports = RecommendedCarousel;
