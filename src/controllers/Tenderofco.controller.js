import Tenderofco from '../models/Tenderofco.js';

export const craeteTenderofco = async (req, res) => {
    try {
        const {
           selectcategary,
            selectsubcategary,
            plotarea,
            addressline,
            aadhaarnumber,
            mobilenumber,
            propertytype,
            currentaddress,
            budget,
            descriptions
        } = req.body;

        if (
            !selectcategary ||
            !selectsubcategary ||
            !plotarea ||
            !addressline ||
            !aadhaarnumber ||
            !mobilenumber ||
            !propertytype ||
            !currentaddress ||
            !budget ||
            !descriptions) {
            return res.status(400).json({
                success: false,
                massage: 'Please fill in all fields'
            });
        }
        const Tenderofcom = new Tenderofco({
            selectcategary: selectcategary.trim(),
            selectsubcategary: selectsubcategary.trim(),
            plotarea: plotarea.trim(),
            addressline: addressline.trim(),
            aadhaarnumber: aadhaarnumber.trim(),
            mobilenumber: mobilenumber.trim(),
            propertytype: propertytype.trim(),
            currentaddress: currentaddress.trim(),
            budget: budget.trim(),
            descriptions: descriptions.trim()
        });
        await Tenderofcom.save();
        return res.status(201).json({
            success: true,
            message: 'Tender of company registration submitted successfully',
            data: Tenderofcom
        });

    } catch (error) {
        console.error('Create Tender of company Error:', error);
        return res.status(500).json({
            success: false,
            message: 'Server Error'
        });

    }
};
export const getAllTenderofco = async (req, res) => {
    try {
        const { cusId } = req.query;
        const tenderofco = await Tenderofco.find({ cusId }
        );
        if (!tenderofco) {
            return res.status(404).json({
                success: false,
                message: 'Tender of company not found'
            });
        }

        return res.status(200).json({
            success: true,
            data: tenderofco
        });
    } catch (error) {
        console.error('Get All Tender of company Error:', error);
        return res.status(500).json({
            success: false,
            message: 'Server Error'
        });
    }
}
