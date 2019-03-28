const router = require('express').Router();
const controller = require('./controller');

router.route('/recommendedCarousel').get(controller.get);

module.exports = router;
