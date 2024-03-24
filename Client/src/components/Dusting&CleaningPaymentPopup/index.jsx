import React, { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import { GiCrossMark } from "react-icons/gi";
import axios from 'axios'; // Import Axios for making HTTP requests
import "./index.css"

export default function DustingCleaningPaymentPopup({ paymentStatus, formData, setPaymentStatus }) {
    const [house, setHouse] = useState(10);
    const [recurringTimes, setRecurringTimes] = useState(1)
    const [noOfTimesPerDay, setNoOfTimesPerDay] = useState(1);

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };
  
    const handleReadClick = () => {
      window.open("https://homaid.in/terms-and-conditions", "_blank");
    };
    
    useEffect(() => {
        if (formData && formData.recurring) {
            if (formData.recurring === "Once"){
                setRecurringTimes(1);
            } else if (formData.recurring === "Daily") {
                setRecurringTimes(30);
            } else if (formData.recurring === "Weekly") {
                setRecurringTimes(4);
            } else if (formData.recurring === "Monthly") {
                setRecurringTimes(12);
            }
        }
        if (formData && formData.houseType) {
            if (formData.houseType === "1BHK") {
                setHouse(10);
            } else if (formData.houseType === "2BHK") {
                setHouse(20);
            } else if (formData.houseType === "3BHK") {
                setHouse(30);
            } else if (formData.houseType === "4BHK") {
                setHouse(40);
            } else if (formData.houseType === "Villa") {
                setHouse(50);
            }
        }
        
    }, [formData])

    function totalCost() {
        const cost = recurringTimes * house * noOfTimesPerDay;
        return cost;
    }

    const handlePayment = async (cost) => {
        if(isChecked){
            const data = {
                name: formData.name,
                amount: cost*100,
                number: '7498608775',
                MUID: 'MUID' + Date.now(),
                transactionId: 'T' + Date.now(),
            };
            try {
                const response = await axios.post('https://api.homaid.in/api/payment', {
                    amount: data.amount,
                    number: data.number,
                });
        
                if (response.data.redirectUrl) {
                    window.location.href = response.data.redirectUrl;
                }
            } catch (error) {
                console.error("Error processing payment:", error);
                // Optionally show an error message to the user
                alert('Error processing payment. Please try again later.');
            }
        }else{
            alert("Please accept terms and conditions")
        }
    };

    return (
        <Popup
            open={paymentStatus}
            closeOnDocumentClick={false} // Prevents closing on outside click
            position="center center"
        >
            <div className="payment-overlay">
                <button onClick={() => setPaymentStatus(false)} className='cross-button'><GiCrossMark className='ig' /></button>
                <div className="c-p-div">
                <h1 className="c-payment-service">Dusting and Setting Service Bill</h1>
                <h2 className="c-payment-service-p">Dusting and Setting Cost for {formData && formData.houseType} is {house}₹</h2>
                <h2 className="c-payment-service-p">Service For: {formData && formData.recurring} (means {recurringTimes} {recurringTimes >  1 ? "days" : "day"})</h2>
                <h2 className="c-payment-service-p">Number of cleanings per day: {noOfTimesPerDay}</h2>
                <p className="c-payment-service-p-q">Select Number Of dusting and setting Per Day?</p>
                <div className="button-container-c-p">
                    <button className="no-times-button" onClick={() => setNoOfTimesPerDay(1)}>One</button>
                    <button className="no-times-button" onClick={() => setNoOfTimesPerDay(2)}>Two</button>
                </div>
                <div className="c-p-div">
                        {/* Your other content here */}
                        <label htmlFor="terms-checkbox">
                            <input 
                            type="checkbox" 
                            id="terms-checkbox" 
                            name="terms-checkbox" 
                            checked={isChecked} 
                            onChange={handleCheckboxChange} 
                            />
                            I accept the terms and conditions 
                        </label>
                        <span 
                            id="read-terms" 
                            style={{ cursor: 'pointer', textDecoration: 'underline' }} 
                            onClick={handleReadClick}
                            >
                            Read
                        </span>
                    </div>
                <p className="c-payment-service-p-q">Total Cost: ₹{totalCost()}</p>
                <button onClick={() => handlePayment(totalCost())} className="pay-button" >Pay</button>
                </div>
            </div>
        </Popup>
    );
}
