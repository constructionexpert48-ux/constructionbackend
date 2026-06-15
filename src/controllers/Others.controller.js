import Others from '../models/Others.js';

export const createOtherWorker = async (req, res) => {
  try {
    const {
      selectcategries,
      descriptions,
      fullname,
      dob,
      information,
      pincode,
      city,
      gst,
      adhaarnumber,
      pan
    } = req.body;

    // ✅ Validation
    if (
      !selectcategries ||
      !descriptions ||
      !fullname ||
      !dob ||
      !information ||
      !pincode ||
      !city ||
      !gst ||
      !adhaarnumber ||
      !pan 
    ) {
      return res.status(400).json({
        success: false,
        message: "All required fields must be filled",
      });
    }
    // ✅ Create object
    const otherWorker = new Others({
      selectcategries: selectcategries.trim(),
      descriptions: descriptions.trim(),
      fullname: fullname.trim(),
      dob: new Date(dob),
      information: information.trim(),
      pincode: pincode.trim(),
      city: city.trim(),
      gst: gst.trim(),
      adhaarnumber: adhaarnumber.trim(),
      pan: pan.trim(),
       selfPhoto : req.files.selfPhoto[0].path.replace(/\\/g, "/"),
       aadhaarFront : req.files.aadhaarFront[0].path.replace(/\\/g, "/"),
       aadhaarBack : req.files.aadhaarBack[0].path.replace(/\\/g, "/"),
       panCardImage : req.files.panCardImage[0].path.replace(/\\/g, "/"),
  
    });

    // ✅ Save to DB
    const savedWorker = await otherWorker.save();

    return res.status(201).json({
      success: true,
      data: savedWorker,
    });

  } catch (error) {
    console.error("Create Other Worker Error:", error);
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export const getOtherWorkers = async (req, res) => {
  try {  
    const {cusId} = req.query;
    const otherWorkers = await Others.find({cusId});

    if (!otherWorkers){
      return res.status(404).json({
        success: false,
        message: "No other workers found",
      });
    }
    res.status(200).json({
     success: true,
     data: otherWorkers,
   });

  } catch (error) {
    console.error("Get Other Workers Error:", error);
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
}