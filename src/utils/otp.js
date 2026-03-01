const otpStore = new Map();

// generate OTP
exports.generateOtp = (length = 6) => {
  return Math.floor(
    Math.pow(10, length - 1) +
    Math.random() * Math.pow(10, length)
  ).toString();
};

// save OTP
exports.saveOtp = (phone, otp, ttlSeconds = 300) => {
  otpStore.set(phone, {
    otp,
    expiresAt: Date.now() + ttlSeconds * 1000
  });
};

// verify OTP
exports.verifyOtp = (phone, otp) => {
  const record = otpStore.get(phone);
  if (!record) return false;

  if (record.expiresAt < Date.now()) {
    otpStore.delete(phone);
    return false;
  }

  if (record.otp !== otp) return false;

  otpStore.delete(phone); // one-time use
  return true;
};
