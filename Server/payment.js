const axios = require('axios');
const { v4: uuidv4 } = require('uuid');
const SHA256 = require('crypto-js/sha256');
const Buffer = require('buffer').Buffer;

const handlePayment = async (req, res) => {
  const { amount, number } = req.body;

  const transactionid = 'Tr-' + uuidv4().toString(36).slice(-6);

  const payload = {
    merchantId: 'PGTESTPAYUAT',
    merchantTransactionId: transactionid,
    merchantUserId: 'MUID-' + uuidv4().toString(36).slice(-6),
    amount: amount,
    redirectUrl: `http://localhost:5173/api/status/${transactionid}`,
    redirectMode: 'POST',
    callbackUrl: `http://localhost:5173/api/status/${transactionid}`,
    mobileNumber: '9999999999',
    paymentInstrument: {
      type: 'PAY_PAGE',
    },
  };

  const dataPayload = JSON.stringify(payload);

  // Use Buffer.from for Node.js and window.btoa for browsers
  const dataBase64 =
    typeof window === 'undefined'
      ? Buffer.from(dataPayload).toString('base64')
      : window.btoa(dataPayload);

  const fullURL = `${dataBase64}/pg/v1/pay099eb0cd-02cf-4e2a-8aca-3e6c6aff0399`;
  const dataSha256 = SHA256(fullURL);

  const checksum = `${dataSha256}###${1}`;
  console.log('c====', checksum);

  const UAT_PAY_API_URL =
    'https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay';

  try {
    const response = await axios.post(
      UAT_PAY_API_URL,
      {
        request: dataBase64,
      },
      {
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
          'X-VERIFY': checksum,
        },
      }
    );

    const redirectUrl =
      response.data.data.instrumentResponse.redirectInfo.url;

    res.status(200).json({ redirectUrl });
  } catch (error) {
    console.error('Error processing payment:', error);
    res.status(500).json({ error: 'Error processing payment' });
  }
};

module.exports = handlePayment;