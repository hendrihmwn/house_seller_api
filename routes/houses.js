const express = require('express');
const { getHouse, queryHouses } = require('../controllers/house.controller');
const router = express.Router();

router.get('/', queryHouses);
router.get('/:id', getHouse);

module.exports = router;

