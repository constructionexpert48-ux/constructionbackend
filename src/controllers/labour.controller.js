const labourWorker = require("../models/labourWorker");
const { LabourWorker } = labourWorker;

exports.addLabourWorker = async (req, res) => {
  try {
    const worker = await LabourWorker.create(req.body);
    res.status(201).json({ success: true, worker });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
exports.getLabourWorkers = async (_req, res) => {
  try {
    const workers = await LabourWorker.findAll();
    res.json({ success: true, workers });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};