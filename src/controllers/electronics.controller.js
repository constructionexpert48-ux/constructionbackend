import ElectronicsWorker from "../models/electronicsWorker.js";

export const createelectronics = async (req, res) => {
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
    // 🔴 Basic Validation
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

    const electronicsWorker = new ElectronicsWorker({
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

    await electronicsWorker.save();

    return res.status(201).json({
      success: true,
      message: "Architect registration submitted successfully",
      data: electronicsWorker,
    });
  } catch (error) {
    console.error("Create Architect Error:", error);
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export const getAllElectronics = async (req, res) => {
  try {
    const { cusId } = req.query;

    const electronics = await ElectronicsWorker.findOne({ cusId });

    if (!electronics) {
      return res.status(404).json({
        success: false,
        message: "Not found",
      });
    }

    res.status(200).json({
      success: true,
      data: electronics,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};