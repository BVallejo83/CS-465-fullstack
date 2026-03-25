require('./db');
const mongoose = require('mongoose');
const Trip = require('./travlr');
const fs = require('fs');
const path = require('path');

const tripsPath = path.join(__dirname, '../../trips.json');
const trips = JSON.parse(fs.readFileSync(tripsPath, 'utf8'));

const seedDB = async () => {
    try {
        await Trip.deleteMany({});
        await Trip.insertMany(trips);
        console.log('Database seeded successfully');
    } catch (err) {
        console.log('Seed error:', err);
    } finally {
        await mongoose.disconnect();
            console.log('Mongoose disconnected');
    };
};

seedDB();