const express = require('express');
const {
  getLocations, getOneLocation, createLocation, updateLocation, deleteLocation,
} = require('../controllers/locations');

const router = express.Router();

router.get('/all', getLocations);
router.get('/:name', getOneLocation);
router.post('/create', createLocation);
router.put('/:name', updateLocation);
router.delete('/:name', deleteLocation);

module.exports = router;
