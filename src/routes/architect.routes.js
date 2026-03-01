const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload.js');
const { createArchitect } = require('../controllers/architect.controller');

router.post('/create', upload ,
     createArchitect);

module.exports = router; // ✅ MUST
