const express = require ("express")
const  router = express.router();
const {createMaterialsupp , getAllMaterial} = require("../controllers/Materialsupp.controller");
const auth = require('../middleware/auth');

router ('./create' , createMaterialsupp);
router ('/' , auth , getAllMaterial);


module.exports = router;

