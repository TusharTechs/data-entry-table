const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

// Add data
router.post('/data', dataController.addData);

// Update data
router.put('/data/:id', dataController.updateData);

// Get data
router.get('/data', dataController.getData);

// Get data by ID
router.get('/data/:id', dataController.getDataById);

module.exports = router;