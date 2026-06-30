const express = require ("express")
const  router = express.Router();
const upload = require('../middleware/upload.js');
const {createMaterialsupp , getAllMaterial} = require("../controllers/Materialsupp.controller");
const auth = require('../middleware/auth');

router.post('/create', upload, createMaterialsupp);

router.get('/' , auth , getAllMaterial);


module.exports = router;

