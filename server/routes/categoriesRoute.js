const express = require('express');
const getCategories = require('../controllers/categories');

const router = express.Router();

router.get('/all', getCategories);

module.exports = router;
