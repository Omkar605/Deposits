const express = require('express');
const router = express.Router();
const { getDeposits } = require('../controllers/depositController');

router.get('/', getDeposits);

module.exports = router;
