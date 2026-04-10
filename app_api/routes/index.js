const express = require('express');
const router = express.Router();

const ctrlTrips = require('../controllers/trips');

// Get all trips
router.get('/trips', ctrlTrips.tripsList);

router.post('/trips', ctrlTrips.tripsAddTrip);

router.delete('/trips/:tripId', ctrlTrips.tripsDeleteTrip);

router.put('/trips/:tripId', ctrlTrips.tripsUpdateTrip);

// Get single trips
router.get('/trips/:tripCode', ctrlTrips.tripsFindByCode);

module.exports = router;