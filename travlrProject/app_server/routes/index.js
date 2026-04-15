const express = require('express');
const router = express.Router();

const ctrlMain = require('../controllers/main');
const travelController = require('../controllers/travel');

router.get('/', (req, res) => {
    res.redirect('/travel');
})

router.get('/travel', travelController.travel);

module.exports = router;