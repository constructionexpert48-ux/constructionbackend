const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload.js');
const auth = require('../middleware/auth.js');

const {createOtherWorker ,  getOtherWorkers} = require('../controllers/Others.controller.js');

router.post('/create', upload,  createOtherWorker);
router.get('/', auth ,  getOtherWorkers);

module.exports = router;
