const express = require ("express")
const  router = express.Router();
const {createMaterialsupp , getAllMaterial} = require("../controllers/Materialsupp.controller");
const auth = require('../middleware/auth');

router.post('/create' , createMaterialsupp);

router.get('/' , auth , getAllMaterial);


module.exports = router;

