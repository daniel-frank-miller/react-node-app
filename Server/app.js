const express = require('express');
const cors = require('cors');
const handlePayment = require('./payment');
const handlePaymentStatus = require("./paymentStatus");

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.post('/api/payment', handlePayment);

app.get('/api/paymentstatus/:transactionId', handlePaymentStatus);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});