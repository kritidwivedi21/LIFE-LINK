const express = require("express");
const {
  registerDonor,
  searchDonors,
  getAllDonors,
} = require("../controllers/donorController");

const router = express.Router();

// Get All Donors for Dashboard (Yeh line connectivity fix karegi)
router.get("/", getAllDonors);

// Register Donor
router.post("/register", registerDonor);

// Search Donors by Blood Group
router.get("/search", searchDonors);

module.exports = router;
