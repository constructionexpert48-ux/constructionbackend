import TwentyFour from "../models/TwentyFour.js";

export const createTwentyFour = async (req, res) => {
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
    const  Twentyfour = new TwentyFour({
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

    await Twentyfour.save();

    return res.status(201).json({
      success: true,
      message: "24/7 Worker registration submitted successfully",
      data: Twentyfour,
    });
  } catch (error) {
    console.error("Create 24/7 Error:", error);
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export const getAllTwentyfour = async (req, res) => {
  try {
    const { cusId } = req.query;

    const twentyfour = await TwentyFour.findOne({ cusId });

    if (!twentyfour) {
      return res.status(404).json({
        success: false,
        message: "Not found",
      });
    }

    res.status(200).json({
      success: true,
      data: twentyfour,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};