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
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
app.use(express.json());
app.use(cors());

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

const PORT = process.env.PORT || 3000;

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database: ', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// const backendUrl = 'http://178.16.139.165:3000'; 
// app.use('/', createProxyMiddleware({ 
//     target: backendUrl,
//     changeOrigin: true,
//     secure: false
// }));

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
  const { name, location, recurring, familyMemberCount, dateTime } = cookingServicesDetails;
  const email = req.email;
  const addCookingUserQuery = `
    INSERT INTO cooking_services (name, location, recurring, family_member_count, date_and_time, email)
    VALUES (?, ?, ?, ?, ?, ?)
  `;
  connection.query(addCookingUserQuery, [name, location, recurring, familyMemberCount, dateTime, email], (error, results) => {
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
        <p>Click <a href="http://localhost:5173/reset_password?email=${email}&token=${token}">here</a> to reset your password.</p>
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
  const {email} = request.body;

  // Check if the user already exists
  const selectUserQuery = `SELECT * FROM login WHERE email = ?`;
  connection.query(selectUserQuery, [email], async (error, result) => {
    if (error) {
      console.error('Error checking user:', error);
      response.status(500).send('Error checking user');
      return;
    }

    // If user does not exist, proceed with sending OTP
    if (result.length === 0) {
      const otp = Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit OTP

      // Store the OTP in the database
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

// Verify OTP endpoint
app.post('/verify_otp', async (req, res) => {
  const {email, otp, name, phone, password } = req.body;
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
        connection.query(createUserQuery, [name, email, phone, hashedPassword], async (error, results) => {
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
            html: `<p>Dear ${name},</p>
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

app.post('/api/payment', handlePayment);

app.get('/api/paymentstatus/:transactionId', handlePaymentStatus);


app.listen(PORT,() => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

