const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload.js');
const auth = require('../middleware/auth.js');

const { createArchitect, getAllArchitects } = require('../controllers/architect.controller');

router.post('/create', upload ,
     createArchitect);
router.get('/', auth , getAllArchitects);

module.exports = router;