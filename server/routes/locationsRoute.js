const express = require('express');
const getLocations = require('../controllers/locations');

const router = express.Router();

router.get('/all', getLocations);

module.exports = router;
