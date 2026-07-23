const Donor = require("../models/Donor");

// 1. Get All Donors for Dashboard
const getAllDonors = async (req, res) => {
  try {
    // Database se saare users bina kisi restriction ke fetch honge
    const donors = await Donor.find({}).lean();
    
    // Aapke terminal pe count print hoga verify karne ke liye
    console.log(`[Dashboard Sync]: Mongo Atlas se total ${donors.length} records mile.`);
    
    res.status(200).json(donors);
  } catch (error) {
    console.error("DASHBOARD DATA FETCH ERROR:", error);
    res.status(500).json({
      message: "Error fetching dashboard data",
      error: error.message,
    });
  }
};

// 2. Register Donor
const registerDonor = async (req, res) => {
  try {
    const { name, age, gender, blood_group, phone, email, address } = req.body;

    const donor = await Donor.create({
      full_name: name,
      age: Number(age),
      gender,
      blood_group,
      phone,
      email,
      city: address,
    });

    res.status(201).json({ message: "Donor registered successfully", donor });
  } catch (error) {
    console.error("DONOR ERROR:", error);
    res.status(500).json({ message: "Donor registration failed", error: error.message });
  }
};

// 3. Search Donors
const searchDonors = async (req, res) => {
  try {
    const { blood_group } = req.query;
    const donors = await Donor.find({ blood_group });
    res.status(200).json(donors);
  } catch (error) {
    console.error("SEARCH ERROR:", error);
    res.status(500).json({ message: "Error searching donors", error: error.message });
  }
};

module.exports = {
  registerDonor,
  searchDonors,
  getAllDonors,
};
