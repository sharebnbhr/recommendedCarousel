const mongoose = require('mongoose');
const RecommendedCarousel = require('./index.js');

function rArrI(num) {
  return Math.floor(Math.random(num) * 9);
}

function rPrice() {
  return Math.floor(Math.random() * 500) + 100;
}

function rReviewNum(num) {
  return Math.floor(Math.random() * 50) + 20;
}

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
const imgUrlArr = [
  'https://www.californiabeaches.com/wp-content/uploads/2017/08/85c48ce0-ac2d-4d85-891b-103b4f4f0d0b-650x434.jpg,',
  'https://www.dreamystays.com/wp-content/uploads/2017/11/airbnb-la-jolla-comfort-4.jpg',
  'http://www.californiabeaches.com/wp-content/uploads/2017/08/3793ccea-10f6-4596-b252-cbc1f1573b12-650x434.jpg',
  'https://media.timeout.com/images/104724949/630/472/image.jpg',
  'https://cdn.thecoolist.com/wp-content/uploads/2015/05/AirBNB-Treehouses-Atlanta-Treehouse-Vacation-Rental-2.jpg',
  'https://media.timeout.com/images/105100498/630/472/image.jpg',
  'https://cdn.hiconsumption.com/wp-content/uploads/2016/03/Charming-Seaside-Laguna-Beach.jpg',
  'https://assets3.thrillist.com/v1/image/1806062/size/tmg-article_default_mobile;jpeg_quality=20.jpg',
  'https://cdn-images-1.medium.com/max/1600/1*DFokws5H2JsU6x6QZ164lg.jpeg'
];

function dummySingleObj() {
  obj = {
    imgUrl: imgUrlArr[rArrI()],
    city: cityArray[rArrI()],
    typeOfBnb: typeOfBnbArr[rArrI()],
    description: descriptionArr[rArrI()],
    price: rPrice(),
    reviewNum: rReviewNum()
  };
  return obj;
}

function dummySeed() {
  var counter = 0;
  var container = [];
  while (counter < 100) {
    container.push(dummySingleObj());
    counter++;
  }
  RecommendedCarousel.insertMany(container)
    .then(() => {
      console.log('database seeded!');
      mongoose.connection.close();
    })
    .catch(err => console.log(err));
}

dummySeed();
