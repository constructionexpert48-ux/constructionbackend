const mechanicalWorker = require("../models/mechanicalWorker");
const { MechanicalWorker } = mechanicalWorker;
exports.addMechanicalWorker = async (req, res) => {
  try {
    const worker = await MechanicalWorker.create(req.body);
    res.status(201).json({ success: true, worker });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
exports.getMechanicalWorkers = async (_req, res) => {
  try {
    const workers = await MechanicalWorker.findAll();
    res.json({ success: true, workers });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};