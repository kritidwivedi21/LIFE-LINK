// 1. Force stable public DNS servers to resolve the ECONNREFUSED error
const dns = require("node:dns");
dns.setServers(["1.1.1.1", "8.8.8.8"]);

// 2. Initialize environment variables and dependencies
require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const donorRoutes = require("./routes/donorRoutes");
const stockRoutes = require("./routes/stockRoutes");
const requestRoutes = require("./routes/requestRoutes");

const app = express();

// Temporary check
console.log("MONGO_URI loaded:", !!process.env.MONGO_URI);

// 3. Connect to Database
connectDB();

// 4. Middleware
app.use(cors());
app.use(express.json());

// 5. Routes
app.use("/api/donors", donorRoutes);
app.use("/api/stock", stockRoutes);
app.use("/api/requests", requestRoutes);

app.get("/test-server", (req, res) => {
  res.send("NEW SERVER IS RUNNING");
});

app.get("/", (req, res) => {
  res.send("Blood Bank Server Running 🚀");
});

// 6. Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
