const express = require('express');
const router = express.Router();
const { createParkingLot } = require('../controllers/parkingLotController');

router.post('/parkinglots', createParkingLot);

module.exports = router;
