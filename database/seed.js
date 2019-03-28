const mongoose = require('mongoose');
const RecommendedCarousel = require('./index.js');

const cityArray = [
  'Los Angeles',
  'Glendale',
  'Palm Springs',
  'DTLA',
  'Silverlake',
  'Hollywood',
  'Beverly Hills',
  'Huntington Beach',
  'LAX'
];

const typeOfBnbArr = [
  'ENTIRE HOUSE',
  'ENTIRE APARTMENT',
  'ENTIRE COTTAGE',
  'ENTIRE LOFT',
  'SHARED HOUSE',
  'SHARED APARTMENT',
  'SHARED COTTAGE',
  'SHARED LOFT',
  'SHARED GUESTHOUSE'
];

const descriptionArr = [
  'Private Modern Getaway',
  'Beautiful Cozy Home',
  'Luxurious Hideaway, Amazing View',
  'Great Location on a budget',
  'Charming house near downtown',
  'Rustic Bungalow HUGE & Beautiful',
  'Stylish Getaway',
  'Great Price & Location',
  'Charming Studio Retreat'
];

function shuffle(array) {
  var m = array.length,
    t,
    i;

  while (m) {
    i = Math.floor(Math.random() * m--);

    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}

// const recommendedCarouselSchema = mongoose.Schema({
//     imgUrl: String,
//     typeOfBnb: String,
//     city: String,
//     description: String,
//     price: Number,
//     new: Boolean
//   });

// const seedData = [
//   {
//     imgUrl:
//     typeOfBnb:
//     city:
//     description:
//     price:
//     new:
//   },
// ];

// const seedFunction = () => {
//     RecommendedCarousel.create(seedData)
//     .then(() => {
//       console.log('database seeded!');
//       mongoose.connection.close();
//     })
//     .catch(error => console.error(error));
// };

// seedFunction();
