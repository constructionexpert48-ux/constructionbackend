import mongoose from "mongoose";

const commercialForRentSchema = new mongoose.Schema({
  lookingto: {
    type: String,
    required: true,
    trim: true
  },
  kindofproperty: {
    type: String,
    required: true,
    trim: true
  },
  propertytype: {
    type: String,
    required: true,
    trim: true
  },
  propertyImage: {
    type: String, // base64
  },
  propertyprice: {
    type: String,
    required: true,
    trim: true
  },
  propertyAdd: {
    type: String,
    required: true,
    trim: true
  },
  pincode: {
    type: String,
    required: true,
    trim: true
  },
  localty: {
    type: String,
    required: true,
    trim: true
  },
  city: {
    type: String,
    required: true,
    trim: true
  },
  state: {
    type: String,
    required: true,
    trim: true
  },
  contactdetails: {
    type: String,
    required: true,
    trim: true
  },
  landmark: {
    type: String,
    trim: true
  },
  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending",
  },
}, { timestamps: true });
const CommercialForRent = mongoose.model("CommercialForRent",
  commercialForRentSchema);
export default CommercialForRent;



