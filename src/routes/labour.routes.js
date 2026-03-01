const express = require("express");
const router = express.Router();
const controller = require("../controllers/labour.controller");

router.post('/', controller.addLabourWorker);
router.get('/', controller.getLabourWorkers);

module.exports = router;