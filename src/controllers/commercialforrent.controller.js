import commercialforrent from '../models/commercialforrent.js';

// ✅ CREATE
export const createCommercialForRent = async (req, res) => {
  try {
    const {
      lookingto,
      kindofproperty,
      propertytype,
      propertyprice,
      propertyAdd,
      pincode,
      localty,
      city,
      state,
      contactdetails,
      landmark
    } = req.body;

    // ✅ Validation
    if (
      !lookingto ||
      !kindofproperty ||
      !propertytype ||
      !propertyprice ||
      !propertyAdd ||
      !pincode ||
      !localty ||
      !city ||
      !state ||
      !contactdetails
    ) {
      return res.status(400).json({
        message: "All required fields must be filled",
      });
    }


    // ✅ Create object
    const newCommercialForRent = new commercialforrent({
      lookingto: lookingto.trim(),
      kindofproperty: kindofproperty.trim(),
      propertytype: propertytype.trim(),
      propertyprice: propertyprice.trim(), // no trim (number/string ok)
      propertyAdd: propertyAdd.trim(),
      pincode:pincode.trim(), // no trim
      localty: localty.trim(),
      city: city.trim(),
      state: state.trim(),
      contactdetails: contactdetails.trim(),
      landmark,
      propertyImage :req.files.propertyImage[0].path.replace(/\\/g, "/"), 
    });

    // ✅ Save
    await newCommercialForRent.save()
    return  res.status(201).json({
        succress: true,
        message: "Commercial for rent created successfully",
        data: newCommercialForRent,
      });
  
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



// ✅ GET ALL or BY ID
export const getCommercialForRent = async (req, res) => {
  try {
    const { cusId } = req.query;
    const commercial  = await commercialforrent.findOne({ cusId });

    if (!commercial) {
        return res.status(404).json({ message: "Commercial for rent not found" });
        }

    res.status(200).json({
      success : true,
      data : commercial
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};