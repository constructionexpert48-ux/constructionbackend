import ArchitectWorker from "../models/architectWorker.js";
import CommercialForRent from "../models/commercialforrent.js";
import ElectronicsWorker from "../models/ElectronicsWorker.js";
import Equipment from "../models/Equipment.js";
import LabourWorker from "../models/labourWorker.js";
import LoanWorker from "../models/loanWorker.js";
import MechanicalWorker from "../models/mechanicalWorker.js";
import Others from "../models/Others.js";
import Tender from "../models/Tenderofco.js";
import TwentyFour from "../models/TwentyFour.js";
import Admin from "../models/admin.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// ✅ Central model map
const MODEL_MAP = {
  architect: ArchitectWorker,
  commercial: CommercialForRent,
  electronics: ElectronicsWorker,
  equipment: Equipment,
  labour: LabourWorker,
  loan: LoanWorker,
  mechanical: MechanicalWorker,
  others: Others,
  tender: Tender,
  twentyfour: TwentyFour
};

const getModel = (type) => MODEL_MAP[type?.toLowerCase()];



export const adminLogin = async (req, res) => {
  try {

    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(404).json({
        success: false,
        message: "Admin not found"
      });
    }
    const isMatch = await bcrypt.compare(
      password,
      admin.password
    );
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials"
      });
    }

    const token = jwt.sign(
      { id: admin._id, role: "Admin" },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(200).json({
      success: true,
      token,
      admin
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

export const approveRequest = async (req, res) => {
  try {
    const { id, type } = req.params;

    const Model = getModel(type);

    if (!Model) {
      return res.status(400).json({
        success:false,
        message:"Invalid model type"
      });
    }

    const updated = await Model.findByIdAndUpdate(
      id,
      { status: "APPROVED" },
      { new:true }
    );

    if (!updated){
      return res.status(404).json({
        success:false,
        message:"Record not found"
      });
    }

    res.status(200).json({
      success:true,
      message:"Approved successfully",
      data:updated
    });

  } catch(error){
    res.status(500).json({
      success:false,
      message:error.message
    });
  }
};

export const rejectRequest = async (req,res)=>{
  try{

    const {id,type} = req.params;

    const Model = getModel(type);

    if(!Model){
      return res.status(400).json({
        success:false,
        message:"Invalid model type"
      });
    }

    const updated = await Model.findByIdAndUpdate(
      id,
      {status:"REJECTED"},
      {new:true}
    );

    if(!updated){
      return res.status(404).json({
        success:false,
        message:"Record not found"
      });
    }

    res.status(200).json({
      success:true,
      message:"Rejected successfully",
      data:updated
    });

  }catch(error){
    res.status(500).json({
      success:false,
      message:error.message
    });
  }
};

export const getPendingRequests = async(req,res)=>{
 try{

   const result = {};

   for (const [name,Model] of Object.entries(MODEL_MAP)) {

      result[name] = await Model.find({
        status:{
          $in:["PENDING","pending"]
        }
      });
   }
   res.status(200).json({
      success:true,
      data:result
   });

 }catch(error){
   res.status(500).json({
      success:false,
      message:error.message
   });
 }
};