const Trip = require('../models/travlr');

const travel = async (req, res) => {
    try {
        const trips = await Trip.find({});
        res.render('travel', {
            title: 'Travel Page',
            trips: trips
        });
    } catch (err) {
        res.status(500).send('Error loading travel page');
    }
};

const tripsList = async (req, res) => {
    try {
        const trips = await Trip.find({});
        res.status(200).json(trips);
    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports = {
    travel,
    tripsList
};