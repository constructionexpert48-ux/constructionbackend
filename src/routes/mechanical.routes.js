const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth.js');
const {createMechanical , getAllMechanical} = require('../controllers/mechanical.controller');

router.post('/create', createMechanical);

router.get('/', auth , getAllMechanical);

module.exports = router;