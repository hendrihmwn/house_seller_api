const express = require('express');
const { getHouse, queryHouses } = require('../controllers/house.controller');
const router = express.Router();

router.get('/', queryHouses);

module.exports = router;

