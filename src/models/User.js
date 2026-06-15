const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    phone: {
      type: String,
      required: true,
      unique: true,
      index: true
    },
    role: {
      type: String,
      enum: ['marchant','customer'], // ✅ all allowed
      default: 'marchant'
    },
    name: {
      type: String,
      trim: true
    }
  },
  { timestamps: true }
);

module.exports = model('User', userSchema);
