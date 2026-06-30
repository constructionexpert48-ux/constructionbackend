const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth.js');
const upload = require('../middleware/upload.js');
const {createMechanical , getAllMechanical} = require('../controllers/mechanical.controller');

router.post('/create',  upload, createMechanical);

router.get('/', auth , getAllMechanical);

module.exports = router;