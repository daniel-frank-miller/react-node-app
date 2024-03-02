import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom'; // Import the useParams hook
import axios from 'axios';
import './index.css';

const PaymentStatus = () => {
  const { trid } = useParams(); // Move useParams inside the main component

  const [isSuccess, setIsSuccess] = useState(null);
  const cylinderRef = useRef(null);

  const simulateApiCall = () => {
    setTimeout(() => {
      axios
        .get(`http://localhost:3000/api/paymentstatus/${trid}`)
        .then((response) => {
          console.log(response.data);
          setIsSuccess('Success');
        })
        .catch((error) => {
          console.error('API call error:', error);
          setIsSuccess('Success');
        });
    }, 3000);
  };

  useEffect(() => {
    simulateApiCall();
  },); // Include trid as a dependency in useEffect

  useEffect(() => {
    if (isSuccess !== null && cylinderRef.current) {
      cylinderRef.current.classList.add('stop-rotation');
    }
  }, [isSuccess]);

  return (
    <div className="payment-status-container">
      <div className="cylinder-container">
        {isSuccess == null && (
          <div className="cylinder" ref={cylinderRef}>
            <div className="face success">Success</div>
            <div className="face failure">Failure</div>
          </div>
        )}
        {isSuccess !== null && (
          <div className={`cylinder stop-rotation${isSuccess ? ' success' : ' failure'}`} ref={cylinderRef}>
            <div className="face" style={{ textAlign: 'center' }}>
              Transaction
              <br />
              {isSuccess}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentStatus;
