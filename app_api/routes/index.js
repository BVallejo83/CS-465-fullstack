const express = require('express');
const router = express.Router();

const ctrlTrips = require('../controllers/trips');

// Get all trips
router.get('/trips', ctrlTrips.tripsList);

// Get single trips
router.get('/trips/:tripCode', ctrlTrips.tripsFindByCode);

module.exports = router;