const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload.js');
const auth = require('../middleware/auth.js');
 const {createEquipment , getAllEquipment} = require('../controllers/Equipment.controller.js');

 
router.post('/create', upload, createEquipment);
router.get('/', auth, getAllEquipment);

module.exports = router;