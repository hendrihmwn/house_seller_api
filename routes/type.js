const express = require('express');
const { getType, queryType } = require('../controllers/type.controller');
const router = express.Router();

router.get('/', queryType);
router.get('/:id', getType);

module.exports = router;

