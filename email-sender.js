// Task Five:
const nodemailer = require('nodemailer');

// Create a transporter
const transporter = nodemailer.createTransport({
  service: 'your_email_service_provider', // e.g., 'gmail'
  auth: {
    user: 'your_email_address',
    pass: 'your_email_password',
  },
});

// Define the email options
const mailOptions = {
  from: 'your_email_address',
  to: 'recipient_email_address',
  subject: 'Test Email from Node.js',
  text: 'This is a test email sent from Node.js using nodemailer!',
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error occurred:', error.message);
  } else {
    console.log('Email sent successfully!');
    console.log('Message ID:', info.messageId);
  }
});
