const nodemailer = require("nodemailer");

const { google } = require("googleapis");
const dotenv = require("dotenv");
dotenv.config();

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIERECT_URI = process.env.REDIERECT_URI;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

const authen = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIERECT_URI);
authen.setCredentials({ refresh_token: REFRESH_TOKEN });

const SendMail = async (to, subject, html) => {
  try {
    const accessToken = await authen.getAccessToken();
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.EMAIL_ADDRESS,
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });
    const mailOptions = {
      from: process.env.EMAIL_ADDRESS,
      to: to,
      subject: subject,
      html: html,
    };

    const result = await transporter.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
};

module.exports = {
  SendMail,
};
