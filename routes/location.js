const express = require('express');
const { getLocation, queryLocation } = require('../controllers/location.controller');
const router = express.Router();

router.get('/', queryLocation);
router.get('/:id', getLocation);

module.exports = router;

