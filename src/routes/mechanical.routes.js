const express = require('express');
const router = express.Router();
const mechanicalController = require('../controllers/mechanical.controller');

router.post('/', mechanicalController.addMechanicalWorker);
router.get('/', mechanicalController.getMechanicalWorkers);

module.exports = router;