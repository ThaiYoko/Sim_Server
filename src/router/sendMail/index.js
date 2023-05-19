const express = require("express");
const { CreateTransport } = require("../../middleware/sendMail");
const sendMail_router = express.Router();

sendMail_router.get("/", async (req, res) => {
  try {
    const mailOptions = {
      to: "globalsimshop@gmail.com", // Gửi đến ai?
      subject: "Test API Google Console", // Tiêu đề email
      html: `<h3>Test From Shim Shop</h3>`, // Nội dung email
    };

    const transport = await CreateTransport();

    await transport.sendMail(mailOptions);
    return res.status(200).json({ message: "Email send successfully." });
  } catch (error) {
    return res.status(500).json({ errors: error.message });
  }
});

module.exports = {
  sendMail_router,
};
