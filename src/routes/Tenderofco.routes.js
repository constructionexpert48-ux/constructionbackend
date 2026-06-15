const auth = require('../middleware/auth');
const express = require('express');
const router = express.Router();
const {craeteTenderofco,getAllTenderofco} = require('../controllers/Tenderofco.controller');
const upload = require('../middleware/upload');

router.post('/create', upload, craeteTenderofco);
router.get('/', auth , getAllTenderofco);

module.exports = router;
