require('dotenv').config();
const express = require("express");
const mysql = require("mysql");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const { v4: uuidv4 } = require('uuid');
const nodemailer = require('nodemailer');
const handlePayment = require('./payment');
const handlePaymentStatus = require("./paymentStatus");

const app = express();
app.use(express.json());
app.use(cors());

const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "Homaid@2024",
  database: "HomaidDataBase"
});

const PORT = process.env.PORT || 3000;

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database: ', err);
    return;
  }
  console.log('Connected to MySQL database');
});



const authenticateToken = (request, response, next) => {
  let jwtToken;
  const authHeader = request.headers["authorization"];
  if (authHeader !== undefined) {
    jwtToken = authHeader.split(" ")[1];
  }
  if (jwtToken === undefined) {
    response.status(401);
    response.send("Invalid JWT Token");
  } else {
    jwt.verify(jwtToken, "MY_SECRET_TOKEN", (error, payload) => {
      if (error) {
        response.status(401);
        response.send("Invalid JWT Token");
      } else {
        request.email = payload.email;
        next();
      }
    });
  }
};

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  },
});

app.get("/cooking_services", async (req, res) => {
  const dbQuery = `SELECT * FROM cooking_services`;
  connection.query(dbQuery, (error, results) => {
    if (error) {
      console.error('Error fetching cooking services:', error);
      res.status(500).send('Error fetching cooking services');
      return;
    }
    res.send(results);
  });
});

app.post("/cooking_services", authenticateToken, async (req, res) => {
  const cookingServicesDetails = req.body;
  const { name, location, recurring, familyMemberCount, dateTime, phone } = cookingServicesDetails;
  const email = req.email;
  const addCookingUserQuery = `
    INSERT INTO cooking_services (name, location, recurring, family_member_count, date_and_time, email, phone)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;
  connection.query(addCookingUserQuery, [name, location, recurring, familyMemberCount, dateTime, email, phone], (error, results) => {
    if (error) {
      console.error('Error adding cooking service:', error);
      res.status(500).send('Error adding cooking service');
      return;
    }
    res.send("Added Successfully");
  });
});

app.get("/cleaning_services",async(req,res)=>{
  const dbQuery=`SELECT * FROM cleaning_services`;
  connection.query(dbQuery, (error, results) => {
    if (error) {
      console.error('Error fetching cleaning services:', error);
      res.status(500).send('Error fetching cleaning services');
      return;
    }
    res.send(results);
  });
});

app.post("/cleaning_services",authenticateToken,async(req,res)=>{
  const cleaningServicesDetails=req.body;
  const {name,location,recurring,houseType,cleaningServiceType,dateTime}=cleaningServicesDetails;
  const email = req.email;
  const addCleaningServiceQuery =`
    INSERT INTO cleaning_services (name, location, recurring, house_type, cleaning_service_type, date_and_time, email)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;
  connection.query(addCleaningServiceQuery, [name, location, recurring, houseType, cleaningServiceType, dateTime, email], (error, results) => {
    if (error) {
      console.error('Error adding cleaning service:', error);
      res.status(500).send('Error adding cleaning service');
      return;
    }
    res.send("Added Successfully");
  });
});

const generateUniqueToken = () => {
  return uuidv4();
};

app.post("/forgot_password", async (req, res) => {
  const { email } = req.body;
  const userExistsQuery = `SELECT * FROM login WHERE email = ?`;
  connection.query(userExistsQuery, [email], async (error, result) => {
    if (error) {
      console.error('Error checking user:', error);
      res.status(500).send('Error checking user');
      return;
    }

    if (result.length === 0) {
      return res.status(400).send({ display_msg: "User with the provided email does not exist." });
    }

    const name = result[0].name;
    const token = generateUniqueToken();
    const insertQuery = `INSERT INTO forgot_password (email, token, name) VALUES (?, ?, ?)`;
    connection.query(insertQuery, [email, token, name], async (error, results) => {
      if (error) {
        console.error("Error initiating forgot password:", error);
        res.status(500).send({ display_msg: "Failed to initiate forgot password process." });
        return;
      }
      sendResetPasswordEmail(email, token, name);
      res.send({ display_msg: "Password reset instructions sent to your email." });
    });
  });
});

const sendResetPasswordEmail = async (email, token, name) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER, //enter your mail address
      to: email,
      subject: 'Password Reset Instructions',
      html: `<div>
        <h1>Hi ${name},</h1>
        <p>Click <a href="https://homaid.in/reset_password?email=${email}&token=${token}">here</a> to reset your password.</p>
        <p>Regards Homaid Services</p>
      </div>`
    };
    await transporter.sendMail(mailOptions);
    console.log(`Reset password email sent to ${email} with token: ${token}`);
  } catch (error) {
    console.error("Error sending reset password email:", error);
  }
};

transporter.verify(function(error, success) {
  if (error) {
    console.error("Error verifying nodemailer transporter:", error);
  } else {
    console.log("Nodemailer transporter is ready to send emails");
  }
});

app.post("/reset_password", async (req, res) => {
  const { email, token, newPassword } = req.body;
  const hashedPassword = await bcrypt.hash(newPassword, 10);
  const isValidTokenQuery = `SELECT * FROM forgot_password WHERE email = ? AND token = ?`;
  connection.query(isValidTokenQuery, [email, token], async (error, result) => {
    if (error) {
      console.error('Error checking token:', error);
      res.status(500).send('Error checking token');
      return;
    }

    if (result.length === 0) {
      return res.status(400).send({ display_msg: "Invalid token or email." });
    }

    const updatePasswordQuery = `UPDATE login SET password = ? WHERE email = ?`;
    try {
      await connection.query(updatePasswordQuery, [hashedPassword, email]);
      res.send({ display_msg: "Password updated successfully." });
    } catch (error) {
      console.error("Error updating password:", error);
      res.status(500).send({ display_msg: "Failed to update password." });
    }
  });
});

app.post("/login", async (request, response) => {
  const { email, password } = request.body;
  const selectUserQuery = `SELECT * FROM login WHERE email = ?`;
  connection.query(selectUserQuery, [email], async (error, result) => {
    if (error) {
      console.error('Error fetching user:', error);
      response.status(500).send({ display_msg: "Error fetching user." });
      return;
    }
    if (result.length === 0) {
      response.status(400).send({ display_msg: "Invalid User" });
    } else {
      const dbUser = result[0];
      const isPasswordMatched = await bcrypt.compare(password, dbUser.password);
      if (isPasswordMatched) {
        const payload = { email: email };
        const jwtToken = jwt.sign(payload, "MY_SECRET_TOKEN");
        response.send({ jwtToken });
      } else {
        response.status(400).send({ display_msg: "Invalid Password" });
      }
    }
  });
});

app.post('/auth/google', async(req, res) => {
  // Assuming email, email_verified, and name are sent in the request body
  let { email, texted_email, name } = req.body;
  // Insert the user data into MySQL database
  const sql = 'INSERT INTO google_data (email, email_verified, name) VALUES (?, ?, ?)';
  connection.query(sql, [email, texted_email, name], (err, result) => {
    if (err) {
      console.error('Error inserting user data:', err);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      console.log('User data inserted successfully');
      // Assuming you generate a JWT token here
      const payload = { email: email };
      const jwtToken = jwt.sign(payload, "MY_SECRET_TOKEN");
      res.send({ jwtToken });// Return the token to the client
    }
  });
});

app.get("/auth/google",async(req,res)=>{
  const apiQuery=`SELECT * FROM google_data;`
  connection.query(apiQuery,(error,results)=>{
    if(error){
      console.error('Error fetching login:', error);
      res.status(500).send('Error fetching login');
      return;
    }
    res.send(results);
  })

})

app.get("/login",async (req, res) => {
  const apiQuery = `SELECT * FROM login;`;
  connection.query(apiQuery, (error, results) => {
    if (error) {
      console.error('Error fetching login:', error);
      res.status(500).send('Error fetching login');
      return;
    }
    res.send(results);
  });
});

app.post("/register", async (request, response) => {
  //Check if the user already exists
  const {email}=request.body;
  const selectUserQuery = `SELECT * FROM login WHERE email = ?`;
  connection.query(selectUserQuery, [email], async (error, result) => {
    if (error) {
      console.error('Error checking user:', error);
      response.status(500).send({ display_msg: "Error checking user." });
      return;
    }

    // If user does not exist, proceed with sending OTP
    if (result.length === 0) {
      let otp = Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit OTP
      console.log(typeof(otp))
      // Store the OTP in the database
      otp=otp.toString();
      const insertOtpQuery = `INSERT INTO otp (email, otp) VALUES (?, ?)`;
      connection.query(insertOtpQuery, [email, otp], async (error, results) => {
        if (error) {
          console.error('Error storing OTP:', error);
          response.status(500).send('Error storing OTP');
          return;
        }

        // Send the OTP via email
        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: email,
          subject: 'OTP Verification',
          text: `Your OTP for verification is: ${otp}`
        };

        await transporter.sendMail(mailOptions, (error) => {
          if (error) {
            console.error('Error sending OTP:', error);
            response.status(500).json({ error: 'Error sending OTP. Please try again later.' });
          } else {
            console.log('OTP sent successfully');
            response.json({ message: 'OTP sent successfully.' });
          }
        });
      });
    } else {
      // User already exists
      response.status(400).send({ display_msg: "User already exists" });
    }
  });
  
});

// Verify OTP endpoint goes here......
app.post('/verify_otp', async (req, res) => {
  const {email, otp, firstName, phone, password } = req.body;
  // Retrieve the OTP from the database
  const selectOtpQuery = `SELECT otp FROM otp WHERE email = ?`;
  connection.query(selectOtpQuery, [email], async (error, result) => {
    if (error) {
      console.error('Error retrieving OTP:', error);
      res.status(500).send('Error retrieving OTP');
      return;
    }

    if (result.length === 0) {
      // Email not found
      res.status(400).send({ error: 'Email not found' });
      return;
    }

    const storedOTP = result[0].otp;

    if (storedOTP.toString() === otp) {
      // OTP is valid
      // Remove the OTP from the database
      const deleteOtpQuery = `DELETE FROM otp WHERE email = ?`;
      connection.query(deleteOtpQuery, [email], async (error, result) => {
        if (error) {
          console.error('Error deleting OTP:', error);
          res.status(500).send('Error deleting OTP');
          return;
        }
        
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert user details into the database
        const createUserQuery = `INSERT INTO login (name, email, phone, password) VALUES (?, ?, ?, ?)`;
        connection.query(createUserQuery, [firstName, email, phone, hashedPassword], async (error, results) => {
          if (error) {
            console.error('Error adding user:', error);
            res.status(500).send('Error adding user');
            return;
          }

          // Send registration confirmation email
          const registrationMailOptions = {
            from: process.env.EMAIL_USER, // Sender address
            to: email, // Recipient address
            subject: 'Registration Successful', // Subject line
            html: `<p>Dear ${firstName},</p>
                   <p>Thank you for registering with us!</p>
                   <p>We're excited to have you on board. Happy Homaid!</p>
                   <a href="homaid.in/login" target="_blank">Click here to Login</a>` // Email body (HTML content)
          };

          await transporter.sendMail(registrationMailOptions);
          
          res.send({ message: 'Registration successful.' });
        });
      });
    } else {
      // OTP is invalid
      res.status(400).send({ error: 'Invalid OTP.' });
    }
  });
});

app.post("/contactus",async(req,res)=>{
  const { firstName,lastName,email,phone,message} = req.body;
  const addCookingUserQuery = `
    INSERT INTO contactus (first_name, last_name, email, phone, message)
    VALUES (?, ?, ?, ?, ?)
  `;
  connection.query(addCookingUserQuery, [firstName,lastName,email,phone,message], (error, results) => {
    if (error) {
      console.error('Error adding contact us:', error);
      res.status(500).send({display_msg:'Error adding contact us'});
      return;
    }
    res.send({display_msg:"Contacted successfully, our agent will connect with you!"});
  });
})

app.post("/book-appointment", async (req, res) => {
  const { name, email, phoneNumber, location, date, time, service, message } = req.body;

  // SQL query to check if appointment already exists for the given email
  const checkingQuery = `SELECT * FROM appointment WHERE email = ?`;

  connection.query(checkingQuery, [email], async (error, results) => {
    if (error) {
      console.error('Error checking appointment:', error);
      return res.status(500).send({ display_msg: 'Error checking appointment' });
    }

    if (results.length > 0) {
      const existingAppointment = results[0];
      return res.send({ display_msg: `Booking Appointment is already Scheduled on ${existingAppointment.date} and time ${existingAppointment.time}` });
    }

    // SQL query to insert appointment data into the database
    const addBookAppointmentQuery = `INSERT INTO appointment (name, email, phone_number, location, date, time, service, message) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

    connection.query(addBookAppointmentQuery, [name, email, phoneNumber, location, date, time, service, message], async (error, results) => {
      if (error) {
        console.error('Error Booking Appointment:', error);
        return res.status(500).send({ display_msg: 'Error Booking Appointment' });
      }

      try {
        // Send registration confirmation email
        const registrationMailOptions = {
          from: process.env.EMAIL_USER, // Sender address
          to: email, // Recipient address
          subject: 'Your Homaid Appointment Confirmation and Service Overview', // Subject line
          html: `<p>Hi ${name},</p>
                 <p>We're thrilled to confirm your appointment with Homaid on ${date} at ${time}. Get ready for top-notch cleaning, cooking, and organizing services just for you.</p>
                 <p>Our maid services cover:</p>
                 <ul>
                   <li>Cleaning: We use eco-friendly products for spotless results.</li>
                   <li>Organizing: Regain control of your space with our expert touch.</li>
                   <li>Cooking: Stress-free meal preparation tailored to your preferences.</li>
                   <li>Customized packages: Flexible scheduling to fit your lifestyle.</li>
                   <li>Trained staff: Your safety and peace of mind are our priority.</li>
                 </ul>
                 <p>Happy Homaid!</p>
                 <a href="homaid.in/login" target="_blank">Click here to Login</a>` // Email body (HTML content)
        };
        
        await transporter.sendMail(registrationMailOptions);
        res.send({ display_msg: `Your appointment is scheduled on ${date} at ${time}` });
      } catch (error) {
        console.error('Error sending confirmation email:', error);
        res.status(500).send({ display_msg: 'Error sending confirmation email' });
      }
    });
  });
});

app.post('/api/payment', handlePayment);

app.get('/api/paymentstatus/:transactionId', handlePaymentStatus);


app.listen(PORT,() => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

