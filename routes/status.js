const express = require('express');
const { getStatus, queryStatus } = require('../controllers/status.controller');
const router = express.Router();

router.get('/', queryStatus);
router.get('/:id', getStatus);

module.exports = router;

