import ArchitectWorker from "../models/architectWorker.js";

export const createArchitect = async (req, res) => {
  const baseurl = `${req.protocol}://${req.get("host")}/`;

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
   
    const architectWorker = new ArchitectWorker({
      category: category.trim(),
      fullName: fullName.trim(),
      dob: new Date(dob),
      addressLine: addressLine.trim(),
      areaPincode: areaPincode.trim(),
      city: city.trim(),
      gstNumber: gstNumber?.trim(),
      aadhaarNumber: aadhaarNumber.trim(),
      panNumber: panNumber.trim(),
      
      selfPhoto:  baseurl + req.files.selfPhoto[0].path.replace(/\\/g, "/"), // Handle Windows backslashes
      aadhaarFront : baseurl + req.files.aadhaarFront[0].path.replace(/\\/g, "/"),
      aadhaarBack : baseurl + req.files.aadhaarBack[0].path.replace(/\\/g, "/"),
      panCardImage : baseurl + req.files.panCardImage[0].path.replace(/\\/g, "/"),
    });

    await architectWorker.save();

    return res.status(201).json({
      success: true,
      message: "Architect registration submitted successfully",
      data: architectWorker,
    });
  } catch (error) {
    console.error("Create Architect Error:", error);
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
