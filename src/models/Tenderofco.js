import mongoose from "mongoose";

const TenderofcoSchema = new mongoose.Schema(
    {
        selectcategary: {
            type: String,
            required: true,
            trim: true
        },
        selectsubcategary: {
            type: String,
            required: true,
            trim: true
        },
        plotarea: {
            type: String,
            required: true,
            trim: true
        },
        addressline: {
            type: String,
            required: true,
            trim: true
        },
        aadhaarnumber: {
            type: String,
            required: true,
            trim: true
        },
        mobilenumber: {
            type: String,
            required: true,
            trim: true
        },
        propertytype: {
            type: String,
            required: true,
            trim: true
        },

        currentaddress: {
            type: String,
            required: true,
            trim: true
        },

        budget: {
            type: String,
            required: true,
            trim: true
        },

        descriptions: {
            type: String,
            required: true,
            trim: true
        },

        status: {
            type: String,
            default: "pending",
            enum: ["pending", "approved", "rejected"]
        },
        createdAt:{
            type: Date,
            default: Date.now
        }
   
    },
    {
    timestamps: true
    },
);
const Tenderofco = mongoose.model(
    "Tenderofco", 
    TenderofcoSchema);

export default Tenderofco;