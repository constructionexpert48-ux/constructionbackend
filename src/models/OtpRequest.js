const { Schema, model } = require('mongoose');
const otpSchema = new Schema(
  {
    phone: { type: String, required: true, index: true },
    code: { type: String, required: true },  // store as string
    attempts: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now, expires: parseInt(process.env.OTP_TTL_SECONDS || '300') }
  },
  { timestamps: false }
);

module.exports = model('OtpRequest', otpSchema);
