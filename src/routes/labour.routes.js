const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth.js');
const upload = require('../middleware/upload.js');

const {createLabour , getAllLabour} = require('../controllers/labour.controller.js');

router.post('/create', upload , createLabour);
router.get('/',  auth , getAllLabour);

module.exports = router;