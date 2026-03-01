const express = require("express");
const router = express.Router();
const controller = require("../controllers/civil.controller");

router.post('/', controller.addCivilWorker);
router.get('/', controller.getCivilWorkers);

module.exports = router;
