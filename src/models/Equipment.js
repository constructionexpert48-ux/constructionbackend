import mongoose from 'mongoose';

const equipmentRSchema = new mongoose.Schema(
  {    
    name: {
      type: String,
      required: true,
      trim: true,
    },

    equipmentdescription: {
      type: String,
      required: true,
      trim: true,
    },

    address: {
      type: String,
      required: true,
      trim: true,
    },

    pincode: {
      type: Number,
      required: true,
    },

    localty: {   // (you can rename to 'locality' if needed)
      type: String,
      required: true,
      trim: true,
    },

    city: {
      type: String,
      required: true,
      trim: true,
    },

    state: {
      type: String,
      required: true,
      trim: true,
    },

    image1: {
      type: String, // base64
    },

    image2: {
      type: String, // base64
    },

    mobilenum: {
      type: String,
      required: true,
      trim: true,
    },

    status: {
      type: String,
      enum: ["PENDING", "APPROVED", "REJECTED"],
      default: "PENDING",
    },
  },
  { timestamps: true }
);

const Equipment = mongoose.model("EquipmentR", equipmentRSchema);

export default Equipment;