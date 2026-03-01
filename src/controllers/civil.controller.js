const { CivilWorker } = require("../models/civilWorker");

exports.addCivilWorker = async (req, res) => {
  try {
    const {
      userId,
      category,
      fullName,
      dob,
      addressLine,
      city,
      pincode,
      gstNumber,
      aadhaarNumber,
      panNumber,
      selfie,
      adhaarfrant,
      adhaarback
    } = req.body;
    // ----------- Validation ----------
    if (!userId)
      return res.status(400).json({ success: false, message: "userId is required" });

    if (!category)
      return res.status(400).json({ success: false, message: "category is required" });

    if (!fullName)
      return res.status(400).json({ success: false, message: "fullName is required" });

    if (!dob)
      return res.status(400).json({ success: false, message: "dob is required (YYYY-MM-DD)" });

    if (!addressLine)
      return res.status(400).json({ success: false, message: "addressLine is required" });

    if (!city)
      return res.status(400).json({ success: false, message: "city is required" });

    if (!pincode)
      return res.status(400).json({ success: false, message: "pincode is required" });

    if (!aadhaarNumber)
      return res.status(400).json({ success: false, message: "aadhaarNumber is required" });

    if (!panNumber)
      return res.status(400).json({ success: false, message: "panNumber is required" });

    if (!panimage)
      return res.status(400).json({ success: false, message: "pan image is required" });

    if (!adhaarfrant)
      return res.status(400).json({ success: false, message: "adhaar frant image is required" });

    if (!adhaarback)
      return res.status(400).json({ success: false, message: "adhaar back image is required" });

    if (!selfie)
      return res.status(400).json({ success: false, message: "selfie image is required" });

    // ----------- Save Worker -----------
    const worker = await CivilWorker.create({
      userId,
      category,
      fullName,
      dob,
      addressLine,
      city,
      pincode,
      gstNumber: gstNumber || null, // optional
      aadhaarNumber,
      panNumber,
      panimage,
      adhaarfrant,
      adhaarback
    });

    res.status(201).json({
      success: true,
      message: "Civil worker added successfully",
      worker
    });

  } catch (error) {
    console.error("Add Civil Worker Error:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message
    });
  }
};


// ================= GET ALL WORKERS =================
exports.getCivilWorkers = async (_req, res) => {
  try {
    const workers = await CivilWorker.findAll({
      order: [["createdAt", "DESC"]]
    });

    res.json({
      success: true,
      count: workers.length,
      workers
    });

  } catch (error) {
    console.error("Get Civil Workers Error:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message
    });
  }
};
