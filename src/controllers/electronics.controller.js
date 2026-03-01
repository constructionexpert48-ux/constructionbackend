const electronicsWorker = require("../models/electronicsWorker");

exports.addElectronicsWorker = async (req, res) => {
  try {
    const worker = await electronicsWorker.create(req.body);
    res.status(201).json({ success: true, worker });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}
;
exports.getElectronicsWorkers = async (_req, res) => {
  try {
    const workers = await electronicsWorker.findAll();
    res.json({ success: true, workers });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}
;
