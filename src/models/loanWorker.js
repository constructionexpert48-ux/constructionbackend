module.exports = (sequelize, DataTypes) => {
    const LoanWorker = sequelize.define("LoanWorker", {
      userId: { type: DataTypes.STRING, allowNull: false },
      category: { type: DataTypes.STRING, allowNull: false }, // loan-agent, advisor
      fullName: { type: DataTypes.STRING, allowNull: false },
      dob: { type: DataTypes.DATEONLY },
      addressLine: { type: DataTypes.STRING },
      city: { type: DataTypes.STRING },
      pincode: { type: DataTypes.STRING },
      gstNumber: { type: DataTypes.STRING },
      aadhaarNumber: { type: DataTypes.STRING },
      panNumber: { type: DataTypes.STRING }
    });
    return LoanWorker;
  };
  