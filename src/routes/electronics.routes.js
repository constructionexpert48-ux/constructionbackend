const express = require("express");
const router = express.Router();
const controller = require("../controllers/electronics.controller");

router.post('/', controller.addElectronicsWorker);
router.get('/', controller.getElectronicsWorkers);

module.exports = router;