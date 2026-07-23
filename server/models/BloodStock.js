const mongoose = require("mongoose");

const bloodStockSchema = new mongoose.Schema(
  {
    blood_group: {
      type: String,
      required: true,
      trim: true,
    },

    units: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("BloodStock", bloodStockSchema);