const User = require("../models/User");
const { signAccess } = require("../utils/jwt");
const { generateOtp, saveOtp, verifyOtp } = require("../utils/otp");
const twilio = require("twilio");

const client = twilio(
  process.env.TWILIO_SID,
  process.env.TWILIO_AUTH_TOKEN
);
// SEND OTP
exports.sendOtp = async (phone) => {
  const otp = generateOtp(6);
   await saveOtp(phone, otp, 300);

  await client.messages.create({
    body: `Your OTP is ${otp}`,
    from: process.env.TWILIO_PHONE_NUMBER,
    to: phone
  });
};

// VERIFY OTP + JWT
exports.verifyOtpAndLogin = async (phone, otp) => {
  const valid = await verifyOtp(phone, otp);
  if (!valid) return null;

  let user = await User.findOne({ phone });
  if (!user) {
    user = await User.create({
      phone,
      role: "marchant"
    });
  }

  const token = signAccess({
    id: user._id,
    role: user.role
  });

  return { user, token };
};
