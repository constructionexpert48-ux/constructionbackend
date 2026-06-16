import MechanicalWorker from "../models/mechanicalWorker.js";

export const createMechanical = async (req, res) => {
  try {
    const {
      category,
      fullName,
      dob,
      addressLine,
      areaPincode,
      city,
      gstNumber,
      aadhaarNumber,
      panNumber
    } = req.body;
    if (
      !category ||
      !fullName ||
      !dob ||
      !addressLine ||
      !areaPincode ||
      !city ||
      !aadhaarNumber ||
      !panNumber || 
      !req.files

    ) {
      return res.status(400).json({
        success: false,
        message: "All required fields must be filled",
      });
    }
    const mechanicalWorker = new MechanicalWorker({
      category: category.trim(),
      fullName: fullName.trim(),
      dob: new Date(dob),
      addressLine: addressLine.trim(),
      areaPincode: areaPincode.trim(),
      city: city.trim(),
      gstNumber: gstNumber?.trim(),
      aadhaarNumber: aadhaarNumber.trim(),
      panNumber: panNumber.trim(),
      selfPhoto:  req.files.selfPhoto[0].path.replace(/\\/g, "/"), 
      aadhaarFront : req.files.aadhaarFront[0].path.replace(/\\/g, "/"),
      aadhaarBack :  req.files.aadhaarBack[0].path.replace(/\\/g, "/"),
      panCardImage : req.files.panCardImage[0].path.replace(/\\/g, "/"),
    });

    await mechanicalWorker.save();

    return res.status(201).json({
      success: true,
      message: "Mechanical Worker registration submitted successfully",
      data: mechanicalWorker,
    });
  } catch (error) {
    console.error("Create Mechanical Error:", error);
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export const getAllMechanical = async (req, res) => {
  try {
    const { cusId } = req.query;
    const mechanical = await MechanicalWorker.findOne({ cusId });
    if (!mechanical) {
      return res.status(404).json({
        success: false,
        message: "Not found",
      });
    }

    res.status(200).json({
      success: true,
      data: mechanical,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};