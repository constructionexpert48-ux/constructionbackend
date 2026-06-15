import loanNeed from "../models/loanWorker.js";

export const createloan = async (req, res) => {
  try {
    const { fullName, MobileNumber, Amount, panNumber } = req.body;

    if (!fullName || !MobileNumber || !Amount || !panNumber) {
      return res.status(400).json({
        success: false,
        message: "All required fields must be filled"
      });
    }

    const loanneed = new loanNeed({
      fullName: fullName.trim(),
      MobileNumber: MobileNumber.trim(),
      Amount,
      panNumber: panNumber.trim(),
    });

    await loanneed.save();

    return res.status(201).json({
      success: true,
      message: "Loan Need registration submitted successfully",
      data: loanneed
    });

  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const getallloanNeed = async (req, res) => {
  try {
    const loanneed = await loanNeed.find(); // FIXED
    res.json({ success: true, loanneed });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};