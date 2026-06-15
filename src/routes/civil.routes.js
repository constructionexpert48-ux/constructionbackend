const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload.js');
const auth = require('../middleware/auth.js');

const { CreateCivil , getCivilWorkers } = require('../controllers/civil.controller.js');

router.post('/create', upload , CreateCivil);
router.get('/', auth, getCivilWorkers);

module.exports = router; 
