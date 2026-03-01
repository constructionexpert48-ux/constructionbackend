module.exports = (sequelize, DataTypes) => {
    const ElectronicsWorker = sequelize.define("ElectronicsWorker", {
      userId: { type: DataTypes.STRING, allowNull: false },
      category: { type: DataTypes.STRING, allowNull: false }, // electrician, technician
      fullName: { type: DataTypes.STRING, allowNull: false },
      dob: { type: DataTypes.DATEONLY },
      addressLine: { type: DataTypes.STRING },
      city: { type: DataTypes.STRING },
      pincode: { type: DataTypes.STRING },
      gstNumber: { type: DataTypes.STRING },
      aadhaarNumber: { type: DataTypes.STRING },
      panNumber: { type: DataTypes.STRING }
    });
    return ElectronicsWorker;
  };
  