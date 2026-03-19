const trips = require('../../trips.json');

const travel = (req, res) => {
    res.render('travel', {
        title: 'Travel Page',
        trips: trips
    });
};

module.exports = {
    travel
};