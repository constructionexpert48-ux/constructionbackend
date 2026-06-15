import mongoose from "mongoose";

const civilSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
      trim: true,
    },

    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    dob: {
      type: Date,
      required: true,
    },

    addressLine: {
      type: String,
      required: true,
      trim: true,
    },

    areaPincode: {
      type: String,
      required: true,
      trim: true,
    },

    city: {
      type: String,
      required: true,
      trim: true,
    },

    gstNumber: {
      type: String,
      trim: true,
    },

    aadhaarNumber: {
      type: String,
      required: true,
      trim: true,
    },

    panNumber: {
      type: String,
      required: true,
      trim: true,
    },

    selfPhoto: {
      type : String, // base64
    },

    aadhaarFront: {
      type : String,
    },

    aadhaarBack: {
      type: String,
    },

    panCardImage: {
      type: String,
    },
    
    status: {
      type: String,
      enum: ["PENDING", "APPROVED", "REJECTED"],
      default: "PENDING",
    },
  },
  { timestamps: true }
);

const CivilWorker = mongoose.model(
  "CivilWorker",
  civilSchema
);

export default CivilWorker;
