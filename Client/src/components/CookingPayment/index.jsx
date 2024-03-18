import React, { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import { GiCrossMark } from "react-icons/gi";
import axios from 'axios'; // Import Axios for making HTTP requests
import "./index.css"

export default function CookingPayment({ paymentStatus, formData, setPaymentStatus }) {
    console.log(formData)
    const [noOfMeals, setNoOfMeals] = useState(0);
    const [recurringTimes, setRecurringTimes] = useState(1);

    useEffect(() => {
        if (formData && formData.recurring) {
            if (formData.recurring === "Once") {
                setRecurringTimes(1);
            } else if (formData.recurring === "Daily") {
                setRecurringTimes(120);
            } else if (formData.recurring === "Weekly") {
                setRecurringTimes(4);
            } else if (formData.recurring === "Monthly") {
                setRecurringTimes(30);
            }
        }
    }, [formData])

    function totalCost() {
        const cost = recurringTimes * noOfMeals * 50;
        return cost;
    }

    const handlePayment = async (cost) => {
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
    };

    return (
        <Popup
            open={paymentStatus}
            closeOnDocumentClick={false} // Prevents closing on outside click
            position="center center"
        >
            <div className="payment-overlay">
                <button onClick={() => setPaymentStatus(false)} className='cross-button'><GiCrossMark className='ig' /></button>
                <h1 className="c-payment-service">Cooking Service Bill</h1>
                <h2 className="c-payment-service-p">Meal preparation service priced at ₹50 per meal.</h2>
                <p className="c-payment-service-p-q">Enter Number of Meals per day?</p>
                <div className="button-container-c-p">
                    <button className="no-times-button" onClick={() => setNoOfMeals(1)}>One</button>
                    <button className="no-times-button" onClick={() => setNoOfMeals(2)}>Two</button>
                    <button className="no-times-button" onClick={() => setNoOfMeals(3)}>Three</button>
                </div>
                <p className="c-payment-service-p-q">Total Cost: ₹{totalCost()}</p>
                <button onClick={() => handlePayment(totalCost())} className="pay-button" >Pay</button>
            </div>
        </Popup>
    );
}
