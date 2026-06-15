const express = require("express");
const {
  sendOtp,
  verifyOtpAndLogin
} = require("../controllers/auth.controller");

const router = express.Router();

router.post("/send-otp", async (req, res) => {
  try {
    const { phone } = req.body;
    if (!phone) {
      return res.status(400).json({
        success: false,
        message: "Phone number is required"
      });
    }

    await sendOtp(phone);
    res.json({ success: true, message: "OTP sent successfully" });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to send OTP"
    });
  }
});

router.post("/verify-otp", async (req, res) => {
  const { phone, otp } = req.body;

  if (!phone || !otp) {
    return res.status(400).json({
      success: false,
      message: "Phone and OTP are required"
    });
  }

  const result = await verifyOtpAndLogin(phone, otp);
  if (!result) {
    return res.status(400).json({
      success: false,
      message: "Invalid or expired OTP"
    });
  }
  res.json({
    success: true,
    message: "OTP verified successfully",
    token: result.token,
    user: result.user
  });
});

module.exports = router;
