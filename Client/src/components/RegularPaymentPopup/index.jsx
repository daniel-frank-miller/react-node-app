import React, { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import { GiCrossMark } from "react-icons/gi";
import axios from 'axios'; // Import Axios for making HTTP requests
import "./index.css"

export default function CookingPayment({ paymentStatus, formData, setPaymentStatus }) {
    console.log(formData)
    const [house, setHouse] = useState(10); // Default to 1BHK
    const [recurringTimes, setRecurringTimes] = useState(1);
    const [noOfTimesPerDay, setNoOfTimesPerDay] = useState(1);
    const [floorsCount,setFloorsCount] = useState(1);
    const [serviceT,setServiceT] = useState('');
    const [fCount,setFCount] = useState(1);   
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };
  
    const handleReadClick = () => {
      window.open("https://homaid.in/terms-and-conditions", "_blank");
    };

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
        if (formData && formData.houseType) {
            if (formData.houseType === "1BHK") {
                setHouse(10);
            } else if (formData.houseType === "2BHK") {
                setHouse(20);
            } else if (formData.houseType === "3BHKh") {
                setHouse(35);
            } else if (formData.houseType === "3BHKl") {
                setHouse(30);
            } else if (formData.houseType === "4BHKl") {
                setHouse(40);
            } else if (formData.houseType === "4BHKh") {
                setHouse(45);
            } else if (formData.houseType === "Villa") {
                setHouse(50);
            }
        }
        if (formData && formData.noOfFloors) {
            setFloorsCount(formData.noOfFloors)

        }
        if(formData && formData.cleaningServiceType){
            setServiceT(formData.cleaningServiceType);
        }
        if(formData && formData.count){
            setFCount(formData.count);
        }
    }, [formData])

    function totalCost() {
        if(serviceT=== "mopping"){
            const cost = recurringTimes *house* noOfTimesPerDay*floorsCount;
            return cost;
        }else{
            const cost = 20*parseInt(fCount);
            return cost;
        }
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
            {serviceT=="mopping" ? 
                (<div className="payment-overlay">
                    <button onClick={() => setPaymentStatus(false)} className='cross-button'><GiCrossMark className='ig' /></button>
                    <div className="c-p-div">
                    <h1 className="c-payment-service">Mopping Service Bill</h1>
                    <h2 className="c-payment-service-p">Cleaning Cost for {formData && formData.houseType} is {house}</h2>
                    <h2 className="c-payment-service-p">Service For: {formData && formData.recurring} (means {recurringTimes} {recurringTimes > 1 ? "days" :"day"})</h2>
                    <h2 className="c-payment-service-p">Number of cleanings per day: {noOfTimesPerDay}</h2>
                    <p className="c-payment-service-p-q">Select Number Of Cleanings Per Day?</p>
                    <div className="button-container-c-p">
                        <button className="no-times-button" onClick={() => setNoOfTimesPerDay(1)}>One</button>
                        <button className="no-times-button" onClick={() => setNoOfTimesPerDay(2)}>Two</button>
                    </div>
                    <p className="c-payment-service-p-q">Total Cost: ₹{totalCost()}</p>
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
                    <button onClick={() => handlePayment(totalCost())} className="pay-button" >Pay</button>
                    </div>
                </div>) : 
                (
                    <div className="payment-overlay">
                        <button onClick={() => setPaymentStatus(false)} className='cross-button'><GiCrossMark className='ig' /></button>
                        <div className="c-p-div">
                        <h1 className="c-payment-service">Diswashing Service Bill</h1>
                        <h2 className="c-payment-service-p">Service For: {formData && formData.recurring} (means {recurringTimes} {recurringTimes > 1 ? "days" :"day"})</h2>
                        <h2 className="c-payment-service-p">Number of times per day: {noOfTimesPerDay}</h2>
                        <p className="c-payment-service-p-q">Select Number Of times Per Day?</p>
                        <div className="button-container-c-p">
                            <button className="no-times-button" onClick={() => setNoOfTimesPerDay(1)}>One</button>
                            <button className="no-times-button" onClick={() => setNoOfTimesPerDay(2)}>Two</button>
                        </div>
                        <p className="c-payment-service-p-q">Total Cost: ₹{totalCost()}</p>
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
                        <button onClick={() => handlePayment(totalCost())} className="pay-button" >Pay</button>
                        </div>
                    </div>
                )
            }
        </Popup>
    );
}
