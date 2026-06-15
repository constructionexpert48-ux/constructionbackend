const  auth = require('../middleware/auth.js');
const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload.js');

const { createCommercialForRent, getCommercialForRent } = require('../controllers/commercialforrent.controller.js');

router.post('/create', upload , createCommercialForRent);
router.get('/', auth , getCommercialForRent);

module.exports = router;
