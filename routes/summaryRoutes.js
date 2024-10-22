const express = require('express');
const router = express.Router();
const summaryController = require('../controllers/summaryController');

// Get all categories
router.get('/', summaryController.getSummary);

// Add a new category
router.post('/', summaryController.addCategory);

module.exports = router;
