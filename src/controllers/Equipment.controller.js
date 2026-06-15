import EquipmentR from "../models/Equipment.js";

export const createEquipment = async (req, res) => {
    try {
        const { name,
            equipmentdescription,
            address,
            pincode,
            localty,
            city,
            state,
            mobilenum } = req.body;

        if (!name ||
            !equipmentdescription ||
            !address ||
            !pincode ||
            !localty ||
            !city ||
            !state ||
            !mobilenum) {

            return res.status(400).json({ error: "All fields are required" });
        }

        const newEquipment = new EquipmentR({
            name: name.trim(),
            equipmentdescription: equipmentdescription.trim(),
            address: address.trim(),
            pincode: pincode.trim(),
            localty: localty.trim(),
            city: city.trim(),
            state: state.trim(),
            mobilenum: mobilenum.trim(),
            image1: req.files.image1[0].path.replace(/\\/g, "/"),
            image2: req.files.image2[0].path.replace(/\\/g, "/"),
        });
        await newEquipment.save();
        return res.status(201).json({ success: true,
             data: newEquipment, 
             message: "Equipment registration submitted successfully" });
    } catch (error) {
      return  res.status(500).json({ error: error.message });
            
    }
};


export  const  getAllEquipment = async (req, res) => {
    try {
        const {cusId} = req.params;

        const equipmentRList = await EquipmentR.find(cusId);

        if(!equipmentRList){
            return res.status(404).json({ error: "No equipment registrations found for the given customer ID" });
        }
        return res.status(200).json({ 
            success: true, 
            data: equipmentRList });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

