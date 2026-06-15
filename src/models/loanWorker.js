import mongoose from "mongoose";

const loanSchema = new mongoose.Schema(
  {
   
    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    panNumber: {
      type: String,
      required: true,
      trim: true,
    },
      MobileNumber: {
        type: String,
        required: true,
        trim: true,
      },
      Amount: {
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

  const LoanNeed = mongoose.model(
    "LoanNeed",
     loanSchema
  );
  
export default LoanNeed;