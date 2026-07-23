const BloodRequest = require("../models/BloodRequest");

// Create Blood Request
const createBloodRequest = async (req, res) => {
  try {
    const {
      patient_name,
      blood_group,
      units_required,
      hospital,
      contact,
    } = req.body;

    const bloodRequest = await BloodRequest.create({
      patient_name,
      blood_group,
      units_required: Number(units_required),
      hospital_name: hospital,
      contact_number: contact,
    });

    res.status(201).json({
      message: "Blood request submitted successfully",
      request: bloodRequest,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Blood request failed",
      error: error.message,
    });
  }
};

module.exports = {
  createBloodRequest,
};