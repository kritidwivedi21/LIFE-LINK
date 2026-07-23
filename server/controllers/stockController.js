const BloodStock = require("../models/BloodStock");

// Add Blood Stock
const addBloodStock = async (req, res) => {
  try {
    const { blood_group, units } = req.body;

    const stock = await BloodStock.findOne({ blood_group });

    if (stock) {
      // Agar blood group already exist karta hai,
      // to existing units me new units add honge
      stock.units += Number(units);
      await stock.save();
    } else {
      // Agar blood group nahi hai, new stock create hoga
      await BloodStock.create({
        blood_group,
        units: Number(units),
      });
    }

    res.status(201).json({
      message: "Blood stock added successfully",
    });
  } catch (error) {
    console.error("DATABASE ERROR:", error);

    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Blood Stock
const getBloodStock = async (req, res) => {
  try {
    const stock = await BloodStock.find();

    res.status(200).json(stock);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Error fetching blood stock",
    });
  }
};

module.exports = {
  addBloodStock,
  getBloodStock,
};