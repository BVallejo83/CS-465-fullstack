const express = require('express');
const router = express.Router();

const ctrlTrips = require('../controllers/trips');
const ctrlAuth = require('../controllers/aunthentication');

// JWT authentication middleware to protect secure routes
const { expressjwt: jwt } = require('express-jwt');

const auth = jwt({
    secret: 'MY_SECRET_KEY',
    algorithms: ['HS256'],
    requestProperty: 'payload'
});

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

// Get all trips
router.get('/trips', ctrlTrips.tripsList);

// Protected routes (require valid JWT token)
router.post('/trips', auth, ctrlTrips.tripsAddTrip);
router.delete('/trips/:tripId', auth, ctrlTrips.tripsDeleteTrip);
router.put('/trips/:tripId', auth, ctrlTrips.tripsUpdateTrip);

// Get single trips
router.get('/trips/:tripCode', ctrlTrips.tripsFindByCode);

module.exports = router;