import LabourWarker from "../models/labourWorker.js";

export const createLabour = async (req, res) => {
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
    const labourWorker = new LabourWarker({
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

    await labourWorker.save();

    return res.status(201).json({
      success: true,
      message: "Labour Worker registration submitted successfully",
      data: labourWorker,
    });
  } catch (error) {
    console.error("Create Labour Error:", error);
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export const getAllLabour = async (req, res) => {
  try {
    const { cusId } = req.query;

    const labour = await LabourWarker.findOne({ cusId });

    if (!labour) {
      return res.status(404).json({
        success: false,
        message: "Not found",
      });
    }

    res.status(200).json({
      success: true,
      data: labour,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};