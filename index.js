const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// test

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/newsletter-form", (req, res) => {
  const sendMail = async () => {
    let transporter = nodemailer.createTransport({
      host: "smtp.hostinger.co.uk",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EmailUser,
        pass: process.env.EmailPass,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    let mailOptions = {
      from: '"Lottie Roberts Flowers" <info@lottierobertsflowers.com>', // sender address
      to: req.body.email, // list of receivers
      subject: "Enquiry", // Subject line
      text: "Lottie Roberts Flowers enquiry", // plain text body
      html: "<h1>Form has been submitted</h1>", // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log("Message sent: %s", info.messageId);
      console.log("form submitted");
      res.redirect("/newslettersuccess.html");
    });
  };
  sendMail();
});

app.post("/contact-form", (req, res) => {
  const sendMail = async () => {
    let transporter = nodemailer.createTransport({
      host: "smtp.hostinger.co.uk",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EmailUser,
        pass: process.env.EmailPass,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    let mailOptions = {
      from: '"Lottie Roberts Flowers" <info@lottierobertsflowers.com>', // sender address
      to: req.body.email, // list of receivers
      subject: "Newsletter", // Subject line
      text: "Lottie Roberts Flowers enquiry", // plain text body
      html: "<h1>Form has been submitted</h1>", // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log("Message sent: %s", info.messageId);
      console.log("form submitted");
      res.redirect("/success.html");
    });
  };
  sendMail();
});

// set static folder
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
