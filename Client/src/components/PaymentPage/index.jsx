import  { useState } from 'react';
import "./index.css"
import axios from 'axios';

const PaymentPage = () => {
  const [amount, setAmount] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePayment = async() => {
    setIsAnimating(true);
    await axios.post('http://localhost:3000/api/payment', { amount })
      .then(response => {
        // Handle success or error scenarios
        console.log(response.data)
        if (response.data.redirectUrl) {
          window.location.href = response.data.redirectUrl;
        }
        setIsAnimating(false);
      })
      .catch(error => {
        // Handle error scenarios
        setIsAnimating(false);
      });
  };
  
  const handleKeyPress = (event) => {
    // Prevent typing of negative values
    if (event.key === '-' || event.key === 'e') {
      event.preventDefault();
    }
  };

  return (
    <div className={`payment-page-container ${isAnimating ? 'payment-page-animating' : ''}`}>
      <div className="payment-page-content">
        <h1 className="payment-page-payment-heading">Web Integration with </h1>
        <h1 className="payment-page-payment-heading">PhonePe Payment Gateway</h1>
        <input
          type="number"
          placeholder="Enter amount"
          min="0"
          value={amount}
          onKeyPress={handleKeyPress}
          onChange={(e) => setAmount(e.target.value)}
          className='payment-page-input'
        />
        <button onClick={handlePayment} className='payment-page-button'>
          {isAnimating ? 'Processing...' : 'Pay'}
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
