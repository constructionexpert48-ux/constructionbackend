import CivilWorker from "../models/CivilWorker.js";

export const CreateCivil = async (req, res) => {
  try {
    const {
      category,
      fullName,
      dob,
      addressLine,
      city,
      areaPincode,
      gstNumber,
      aadhaarNumber,
      panNumber,
    } = req.body;
    // ----------- Validation ----------
    if (
   !category ||
    !fullName ||
    !dob ||
    !addressLine ||
    !city ||
    !areaPincode ||
    !aadhaarNumber ||
    !panNumber ||
    !req.files
    ) {
      return res.status(400).json({
        success: false,
        message: "All required fields must be filled",
      });
    }

    const civilWorker = new CivilWorker({
      category: category.trim(),
      fullName: fullName.trim(),
      dob: new Date(dob),
      addressLine: addressLine.trim(),
      city: city.trim(),
      areaPincode: areaPincode.trim(),
      gstNumber: gstNumber?.trim(),
      aadhaarNumber: aadhaarNumber.trim(),
      panNumber: panNumber.trim(),
      selfPhoto: req.files.selfPhoto[0].path.replace(/\\/g, "/"),
      aadhaarFront : req.files.aadhaarFront[0].path.replace(/\\/g, "/"),
      aadhaarBack : req.files.aadhaarBack[0].path.replace(/\\/g, "/"),
      panCardImage : req.files.panCardImage[0].path.replace(/\\/g, "/"),
    });
    await civilWorker.save();
    return res.status(201).json({
      success: true,
      data: civilWorker,
      message: "Civil Worker registration submitted successfully",
    });
  } catch (error) {
    console.error("Error creating Civil Worker:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while processing the registration",
    });
  }
}


export const getCivilWorkers = async (req, res) => {
  try {
    const { cusId } = req.query;
    const civilWorkers = await CivilWorker.find(cusId); 
    return res.status(200).json({
      success: true,
      data: civilWorkers,
    });
  } catch (error) {
    console.error("Error fetching Civil Workers:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while fetching Civil Workers",
    });
  }
}
