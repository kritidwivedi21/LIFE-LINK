const express = require("express");

const {
  addBloodStock,
  getBloodStock,
} = require("../controllers/stockController");

const router = express.Router();

// Get all blood stock
router.get("/", getBloodStock);

// Add blood stock
router.post("/add", addBloodStock);

module.exports = router;