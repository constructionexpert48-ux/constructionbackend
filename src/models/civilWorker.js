module.exports = (sequelize, DataTypes) => {
  const CivilWorker = sequelize.define("CivilWorker", {
    userId: { type: DataTypes.STRING, allowNull: false },

    category: { type: DataTypes.STRING, allowNull: false },      // selectedValue
    fullName: { type: DataTypes.STRING, allowNull: false },      // TextInput
    dob: { type: DataTypes.DATEONLY, allowNull: false },         // date state
    address: { type: DataTypes.STRING, allowNull: false },       // Address input
    gstNumber: { type: DataTypes.STRING, allowNull: true },      // OPTIONAL
    selfPhoto: { type: DataTypes.TEXT('long'), allowNull: false },      // base64
    adhaarFront: { type: DataTypes.TEXT('long'), allowNull: false },    // base64
    adhaarBack: { type: DataTypes.TEXT('long'), allowNull: false },     // base64
    panCard: { type: DataTypes.TEXT('long'), allowNull: false }         // base64
  });

  return CivilWorker;
};
