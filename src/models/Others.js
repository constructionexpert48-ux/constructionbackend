import mongoose from "mongoose";

const OthersSchema = new mongoose.Schema({
    selectcategries: {
        type: String,
        required: true,
        trim: true
    },
    descriptions: {
        type: String,
        required: true,
        trim: true
    }, 
    fullname:{
        type: String,
        required: true,
        trim: true
    },
    dob:{
        type: Date,
        required: true,
        trim: true
    },
    selfPhoto:{
        type: String,
        required: true,
        trim: true
    },
    information:{
        type: String,
        required: true,
        trim: true
    },
    pincode:{
        type: String,
        required: true,
        trim: true
    },
    city:{
        type: String,
        required: true,
        trim: true
    },
    gst:{
        type: String,
        required: true,
        trim: true
    },
    adhaarnumber:{
        type: String,
        required: true,
        trim: true
    },
    aadhaarFront:{
        type: String,
        required: true,
        trim: true
    },
    aadhaarBack:{
        type: String,
        required: true,
        trim: true
    },
    pan:{
        type: String,
        required: true,
        trim: true
    },
    panCardImage:{
        type: String,
        required: true,
        trim: true
    },
    status:{
        type: String,
        enum: ["PENDING", "APPROVED", "REJECTED"],
        default: "PENDING"
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
},
{ timestamps: true}
);
const others = mongoose.model(
"others", OthersSchema
);

export default others;
