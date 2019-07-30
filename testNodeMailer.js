"use strict";
const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'jaypang8@gmail.com',
      pass: process.env.EMAIL_PASSWORD
    }
  });
  
  let mailOptions = {
    from: 'jaypang8@gmail.com',
    to: 'irfansumapraja@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

  module.exports = nodemailer;