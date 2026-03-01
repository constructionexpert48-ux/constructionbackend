const express = require("express");
const router = express.Router();
const controller = require("../controllers/loan.controller");

router.post('/', controller.addLoanWorker);
router.get('/', controller.getLoanWorkers);

module.exports = router;