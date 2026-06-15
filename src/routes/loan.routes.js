const express = require("express");
const router = express.Router();
const { createloan , getallloanNeed } = require("../controllers/loan.controller");
const auth = require("../middleware/auth");

router.post('/create', createloan);

router.get('/', auth , getallloanNeed);

module.exports = router;