const deposits = require('../models/depositModel');

// @desc Get all deposits
// @route GET /api/deposits
// @access Public (or protected if you add auth)
const getDeposits = (req, res) => {
  res.status(200).json(deposits);
};

module.exports = {
  getDeposits,
};
