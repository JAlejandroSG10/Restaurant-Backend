const express = require('express');
const restaurantcontroller = require('../Controllers/restaurantcontroller');
const router = express.Router();

router.post('/createrestaurant', restaurantcontroller.createRestaurant);
router.get('/listrestaurant', restaurantcontroller.listRestaurant);
router.get('/getrestaurant/:restaurantId', restaurantcontroller.getRestaurant);
router.put('/updaterestaurant/:restaurantId', restaurantcontroller.updateRestaurant);
router.put('/disablerestaurant/:restaurantId', restaurantcontroller.disableRestaurant);
router.put('/enablerestaurant/:restaurantId', restaurantcontroller.enableRestaurant);

module.exports = router;