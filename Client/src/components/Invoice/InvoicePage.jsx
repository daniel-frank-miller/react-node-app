// import "./InvoicePage.css";
// import { IoMdGlobe } from "react-icons/io";
// import { FaPhoneAlt } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";

// const InvoicePage = () => {
//   return (
//     <div className="container">
//       <div className="content">
//         <div className="header">
//           <div className="avatar-container">
//             <img
//               src="/src/assets/logo.webp"
//               width={230}
//               alt="Avatar"
//               className="avatar"
//             />
//           </div>
//           <div className="info">
//             <h2 className="title">
//               HOMAID <br /> QUOTATION
//             </h2>
//             <p className="date">Date: 03/04/2024</p>
//           </div>
//         </div>

//         <div className="section">
//           <h3 className="section-title">PAYABLE TO</h3>
//           <p>HOMAID SERVICES</p>
//           <p>Daryna Partners Private Limited</p>
//           <p>Miyapur, Hyderabad</p>
//         </div>

//         <div className="section details">
//           <h3 className="section-title">WORK DETAILS</h3>
//           <div className="detail">
//             <div className="detail-section">
//               <p>Hours of Shift</p>
//               <p>Brooming, Mopping</p>
//               <p>Washroom</p>
//               <p>Utensil</p>
//             </div>
//             <div className="detail-section">
//               <p>: 10:00AM - 11:00AM</p>
//               <p>: 200/Day</p>
//               <p>: 400/Each/week</p>
//               <p>: 200/Day</p>
//             </div>
//           </div>
//         </div>

//         <div className="bg-image">
//           {/* <img src="/src/assets/background-bg.jpeg" alt="" /> */}
//           <div className="service-details">
//             <div className="service-header">
//               <p>SERVICE DETAILS</p>
//               <p>RECURRING</p>
//               <p>PRICE</p>
//               <p>TOTAL</p>
//             </div>
//           </div>

//           <div className="pricing">
//             <div className="pricing-item">
//               <p>Regular Cleaning</p>
//               <p>Washroom Cleaning</p>
//               <p>Dish-washing</p>
//             </div>
//             <div className="pricing-item">
//               <p>Daily</p>
//               <p>Weekly</p>
//               <p>Daily</p>
//             </div>
//             <div className="pricing-item">
//               <p>200/-</p>
//               <p>800/-</p>
//               <p>200/-</p>
//             </div>
//             <div className="pricing-item">
//               <p>6000/-</p>
//               <p>3200/-</p>
//               <p>6000/-</p>
//             </div>
//           </div>

//           <div className="grand-total">
//             <h3 className="grand-total-title">GRAND TOTAL</h3>
//             <div className="grand-total-amount">
//               <p>15200/-</p>
//               <p>Per Month</p>
//             </div>
//           </div>

//           <div className="notes">
//             <h3 className="notes-title">NOTES:</h3>
//             <p>
//               At Homaid, customer satisfaction is our priority. Our team
//               guarantees your home is impeccably clean, comfortable, and
//               precisely suited to your needs.
//             </p>
//           </div>
//         </div>

//         <div className="footer">
//           <div className="contact">
//             <a href="https://homaid.in/" className="contact-link">
//               <span>
//                 <IoMdGlobe />
//               </span>
//               https://homaid.in/
//             </a>
//             <a href="tel:+918125522213" className="contact-link">
//               <span>
//               <FaPhoneAlt />
//               </span>
//               +91 8125522213
//             </a>
//             <a
//               href="mailto:thehomaidservices@gmail.com"
//               className="contact-link"
//             >
//               <span>
//               <MdEmail />
//               </span>
//               thehomaidservices@gmail.com
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InvoicePage;

import React, { useState } from "react";
import "./InvoicePage.css";
import { IoMdGlobe } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const InvoicePage = () => {
  const [services, setServices] = useState([
    {
      name: "Regular Cleaning",
      recurrence: "Daily",
      price: 200,
      total: 6000,
    },
    {
      name: "Washroom Cleaning",
      recurrence: "Weekly",
      price: 800,
      total: 3200,
    },
    {
      name: "Dish-washing",
      recurrence: "Daily",
      price: 200,
      total: 6000,
    },
  ]);

  const handleServiceChange = (index, field, value) => {
    const updatedServices = services.map((service, i) =>
      i === index ? { ...service, [field]: value } : service
    );

    // Update total if price or recurrence is changed
    if (field === "price" || field === "recurrence") {
      updatedServices[index].total = calculateTotal(
        updatedServices[index].recurrence,
        updatedServices[index].price
      );
    }

    setServices(updatedServices);
  };

  const calculateTotal = (recurrence, price) => {
    // You can define the logic to calculate the total based on recurrence and price
    if (recurrence === "Daily") return price * 30; // Assuming 30 days in a month
    if (recurrence === "Weekly") return price * 4; // Assuming 4 weeks in a month
    return price; // Default case
  };

  const grandTotal = services.reduce((acc, service) => acc + service.total, 0);

  return (
    <div className="container">
      <div className="content">
        <div className="header">
          <div className="avatar-container">
            <img
              src="/src/assets/logo.webp"
              width={230}
              alt="Avatar"
              className="avatar"
            />
          </div>
          <div className="info">
            <h2 className="title">
              HOMAID <br /> QUOTATION
            </h2>
            <p className="date">Date: 03/04/2024</p>
          </div>
        </div>

        <div className="section">
          <h3 className="section-title">PAYABLE TO</h3>
          <p>HOMAID SERVICES</p>
          <p>Daryna Partners Private Limited</p>
          <p>Miyapur, Hyderabad</p>
        </div>

        <div className="section details">
          <h3 className="section-title">WORK DETAILS</h3>
          <div className="detail">
            <div className="detail-section">
              <p>Hours of Shift</p>
              <p>Brooming, Mopping</p>
              <p>Washroom</p>
              <p>Utensil</p>
            </div>
            <div className="detail-section">
              <p>: 10:00AM - 11:00AM</p>
              <p>: 200/Day</p>
              <p>: 400/Each/week</p>
              <p>: 200/Day</p>
            </div>
          </div>
        </div>

        <div className="bg-image">
          <div className="service-details">
            <div className="service-header">
              <p>SERVICE DETAILS</p>
              <p>RECURRING</p>
              <p>PRICE</p>
              <p>TOTAL</p>
            </div>
          </div>

          <div className="pricing">
            {services.map((service, index) => (
              <React.Fragment key={index}>
                <div className="pricing-item">
                  <p>{service.name}</p>
                </div>
                <div className="pricing-item">
                  <select
                    value={service.recurrence}
                    onChange={(e) =>
                      handleServiceChange(index, "recurrence", e.target.value)
                    }
                  >
                    <option value="Daily">Daily</option>
                    <option value="Weekly">Weekly</option>
                  </select>
                </div>
                <div className="pricing-item">
                  <input
                    type="number"
                    value={service.price}
                    onChange={(e) =>
                      handleServiceChange(
                        index,
                        "price",
                        parseInt(e.target.value, 10)
                      )
                    }
                  />
                  /-
                </div>
                <div className="pricing-item">
                  <p>{service.total}/-</p>
                </div>
              </React.Fragment>
            ))}
          </div>

          <div className="grand-total">
            <h3 className="grand-total-title">GRAND TOTAL</h3>
            <div className="grand-total-amount">
              <p>{grandTotal}/-</p>
              <p>Per Month</p>
            </div>
          </div>

          <div className="notes">
            <h3 className="notes-title">NOTES:</h3>
            <p>
              At Homaid, customer satisfaction is our priority. Our team
              guarantees your home is impeccably clean, comfortable, and
              precisely suited to your needs.
            </p>
          </div>
        </div>

        <div className="footer">
          <div className="contact">
            <a href="https://homaid.in/" className="contact-link">
              <span>
                <IoMdGlobe />
              </span>
              https://homaid.in/
            </a>
            <a href="tel:+918125522213" className="contact-link">
              <span>
                <FaPhoneAlt />
              </span>
              +91 8125522213
            </a>
            <a
              href="mailto:thehomaidservices@gmail.com"
              className="contact-link"
            >
              <span>
                <MdEmail />
              </span>
              thehomaidservices@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoicePage;
