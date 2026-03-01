const crypto = require("crypto");
const twilio = require("twilio");
const OtpRequest = require("../models/OtpRequest");

const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

const OTP_LENGTH = parseInt(process.env.OTP_LENGTH || "6", 10);

function generateOtp() {
  const max = Math.pow(10, OTP_LENGTH);
  const num = crypto.randomInt(0, max);
  return num.toString().padStart(OTP_LENGTH, "0");
}

async function sendOtp(phone) {
  if (!phone) throw new Error("Phone number is required");

  const code = generateOtp();

  // save in DB
  await OtpRequest.create({ phone, code });

  // send SMS
  await client.messages.create({
    body: `Your ${process.env.OTP_SENDER_NAME || "App"} OTP is: ${code}`,
    from: process.env.TWILIO_PHONE_NUMBER,
    to: phone,
  });

  console.log(`✅ OTP sent to ${phone}: ${code}`);
  return true;
}

async function verifyOtp(phone, code) {
  const record = await OtpRequest.findOne({ phone }).sort({ createdAt: -1 });

  if (!record) return false;

  // Check expiry (TTL index will delete, but check manually too)
  const ttl = parseInt(process.env.OTP_TTL_SECONDS || "300", 10) * 1000;
  if (Date.now() - record.createdAt.getTime() > ttl) {
    await OtpRequest.deleteOne({ _id: record._id });
    return false;
  }

  // Wrong OTP
  if (record.code !== code) {
    record.attempts += 1;
    await record.save();
    return false;
  }

  // ✅ Correct OTP — delete after verification
  await OtpRequest.deleteOne({ _id: record._id });
  return true;
}

module.exports = { sendOtp, verifyOtp };
