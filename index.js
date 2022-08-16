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

// app.post("/newsletter-form", (req, res) => {
//   const sendMail = async () => {
//     let transporter = nodemailer.createTransport({
//       host: "smtp.hostinger.co.uk",
//       port: 587,
//       secure: false, // true for 465, false for other ports
//       auth: {
//         user: process.env.EmailUser,
//         pass: process.env.EmailPass,
//       },
//       tls: {
//         rejectUnauthorized: false,
//       },
//     });

//     const randomVoucherCode = Math.floor(1000 + Math.random() * 9000);
//     console.log(randomVoucherCode);

//     let output = `<!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//   </head>
//   <body>
//     <div
//       style="
//         padding: 10px 0 10px 0;
//         max-width: 600px;

//         background: #b6bad4;
//         text-align: center;
//       "
//     >
//       <img
//         src="https://www.lottierobertsflowers.com/img/logo.jpg"
//         width="150"
//         alt="logo"
//       />
//     </div>
//     <div style="max-width: 600px; background: white">
//       <div style="padding: 10px">
//         <h4>Thank you for signing up to my newsletter</h4>
//         <p style="text-align: left">Dear ${req.body.name},</p>
//         <p>Thank you for signing up to my newsletter.</p>
//         <p>
//           Please quote the following code, and your name, when placing your
//           first order to receive a 10% discount:
//         </p>
//         <h5 style="text-align: center">CODE: ${randomVoucherCode}</h5>
//         <p>Kind Regards</p>
//         <p>Nicola</p>
//       </div>
//       <div
//         style="
//           padding: 5px 0 5px 0;
//           max-width: 600px;
//           color: #fff;
//           background: #b6bad4;
//           text-align: center;
//         "
//       >
//         <h5>Place an order: info@lottierobertsflowers.com | 07989 713 742</h5>
//       </div>
//     </div>
//   </body>
// </html>`;

//     let mailOptions = {
//       from: '"Lottie Roberts Flowers" <info@lottierobertsflowers.com>',
//       to: `${req.body.email}; info@lottierobertsflowers.com`,
//       subject: "Newsletter",
//       text: "Lottie Roberts Flowers newsletter",
//       html: output,
//     };

//     // send mail with defined transport object
//     transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//         return console.log(error);
//       }
//       console.log("Message sent: %s", info.messageId);
//       console.log("form submitted");
//       res.redirect("/newslettersuccess.html");
//     });
//   };
//   sendMail();
// });

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

    let output = `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    <div
      style="
        padding: 10px 0 10px 0;
        max-width: 600px;
        background: #b6bad4;
        text-align: center;
      "
    >
      <img
        src="https://www.lottierobertsflowers.com/img/logo.jpg"
        width="150"
        alt="logo"
      />
    </div>
    <div style="max-width: 600px; background: white">
      <div style="padding: 10px">
        <h4>Thank you for your enquiry</h4>
        <p style="text-align: left">Dear ${req.body.name},</p>
        <p>Thank you for your enquiry.</p>
        <p>
          I will endeavour to reply to you as soon as I can on the details you have provided:
          <ul>
          <li>${req.body.email}</li>
          <li>${req.body.number}</li>
          </ul>
          <p>Message<br/>${req.body.message}</p>
        </p>
        <p>Kind Regards</p>
        <p>Nicola</p>
      </div>
      <div
        style="
          padding: 5px 0 5px 0;
          max-width: 600px;
          color: #fff;
          background: #b6bad4;
          text-align: center;
        "
      >
        <h5>Place an order: info@lottierobertsflowers.com | 07989 713 742</h5>
      </div>
    </div>
  </body>
</html>
    `;

    let mailOptions = {
      from: '"Lottie Roberts Flowers" <info@lottierobertsflowers.com>',
      to: `${req.body.email}; info@lottierobertsflowers.com`,
      subject: "Enquiry",
      text: "Lottie Roberts Flowers newsletter registration",
      html: output,
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
  // a change
  sendMail();
});

// set static folder
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
