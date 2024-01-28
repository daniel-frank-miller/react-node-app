// server.js

const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
require("dotenv").config();

app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' }));

// Razorpay Route
const phonepeRoute = require('./routes/phonepe/phonepeRoute');
app.use("/api/payment/phonepe", phonepeRoute);

// Starting Server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
