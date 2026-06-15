const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload.js');
const auth = require('../middleware/auth.js');
const { createTwentyFour, getAllTwentyfour } = require('../controllers/Twentyfour.controller.js');


router.post('/create', upload, createTwentyFour);
router.get('/', auth , getAllTwentyfour);

module.exports = router;