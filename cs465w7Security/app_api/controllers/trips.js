const mongoose = require('mongoose');
require('../../app_server/models/travlr');
const Trip = mongoose.model('Trip');

// GET all Trips
const tripsList = async (req, res) => {
    try {
        const trips = await Trip.find({});
        res.status(200).json(trips);
    } catch (err) {
        res.status(500).json(err);
    }
};

// Get single trip
const tripsFindByCode = async (req, res) => {
    try {
        const trip = await Trip.findOne({ code: req.params.tripCode });

        if (!trip) {
            return res.status(404).json({ message: 'Trip not found' });
        }

        res.status(200).json(trip);
    } catch (err) {
        res.status(500).json(err);
    }
};

const tripsAddTrip = async (req, res) => {
    console.log('POST /api/trips HIT');
    console.log(req.body);

    try {
        const trip = await Trip.create({
            code: Date.now().toString(),
            name: req.body.name,
            length: req.body.length,
            start: req.body.start,
            resort:req.body.resort,
            perPerson: req.body.perPerson,
            image: req.body.image,
            description: req.body.description
        });
        
        res.status(201).json(trip);
    } catch (err) {
        res.status(400).json(err);
    }
};

const tripsDeleteTrip = async (req, res) => {
    console.log('DELETE HIT:', req.params.tripId);

    try {
        const trip = await Trip.findByIdAndDelete(req.params.tripId);

        if (!trip) {
            return res.status(404).json({ message: 'Trip not found' });
        }
        
        res.status(204).json(null);
    } catch (err) {
        res.status(500).json(err);
    }
};

const tripsUpdateTrip = async (req, res) => {
    try {
        const trip = await Trip.findByIdAndUpdate(
            req.params.tripId,
            {
                name: req.body.name,
                length: req.body.length,
                start: req.body.start,
                resort: req.body.resort,
                perPerson: req.body.perPerson,
                image: req.body.image,
                description: req.body.description
            },
            { new: true, runValidators: true}
        );
        
        if (!trip) {
            return res.status(404).json({ message: 'Trip not found' });
        }

        res.status(200).json(trip);
    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports = {
    tripsList,
    tripsFindByCode,
    tripsAddTrip,
    tripsDeleteTrip,
    tripsUpdateTrip
};