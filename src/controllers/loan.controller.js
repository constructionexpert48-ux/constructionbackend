const loanWorker = require("../models/loanWorker");
const { LoanWorker } = loanWorker;
exports.addLoanWorker = async (req, res) => {
  try {
    const worker = await LoanWorker.create(req.body);
    res.status(201).json({ success: true, worker });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
exports.getLoanWorkers = async (_req, res) => {
  try {
    const workers = await LoanWorker.findAll();
    res.json({ success: true, workers });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};