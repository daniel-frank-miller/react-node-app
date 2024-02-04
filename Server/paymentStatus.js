const axios = require('axios');
const sha256 = require('crypto-js/sha256');

const handlePaymentStatus = async(req,res) =>{
    const { transactionId } = req.params;
    const merchantId = 'PGTESTPAYUAT';
    const saltKey = "pay099eb0cd-02cf-4e2a-8aca-3e6c6aff0399";
    const saltIndex = 1;
    const st = `/pg/v1/status/${merchantId}/${transactionId}` + saltKey;
    
    const dataSha256 = sha256(st);

    const checksum = dataSha256 + "###" + saltIndex;

    const options = {
        method: "GET",
        url: `https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/status/${merchantId}/${transactionId}`,
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
          "X-VERIFY": checksum,
          "X-MERCHANT-ID": `${merchantId}`,
        },
    };

    const response = await axios.request(options);
    console.log("r===", response.data.code);

    if(response.data.code == "PAYMENT_SUCCESS"){
        res.send("Success");
    }else{
        res.send("Failure");
    }
}

module.exports = handlePaymentStatus;