const mongoose = require("mongoose");

const bloodRequestSchema = new mongoose.Schema(
  {
    patient_name: {
      type: String,
      required: true,
      trim: true,
    },

    blood_group: {
      type: String,
      required: true,
      trim: true,
    },

    units_required: {
      type: Number,
      required: true,
      min: 1,
    },

    hospital_name: {
      type: String,
      required: true,
      trim: true,
    },

    contact_number: {
      type: String,
      required: true,
      trim: true,
    },

    status: {
      type: String,
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("BloodRequest", bloodRequestSchema);