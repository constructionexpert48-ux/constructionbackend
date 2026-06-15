const { createelectronics, getAllElectronics } = require('../controllers/electronics.controller.js');
const auth = require('../middleware/auth.js');
const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload.js');


router.post('/create', upload , createelectronics);
router.get('/', auth , getAllElectronics);

module.exports = router;