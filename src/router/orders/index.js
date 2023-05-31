const express = require("express");
const { Order_Controller } = require("../../controller/orders");

const multer = require("multer");
const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      return cb(null, "./src/public/img/prepay");
    },
    filename: (req, file, cb) => {
      const fileName = file.originalname.toLowerCase().split(" ").join("-");
      cb(null, fileName);
    },
  }),
});

const order_router = express.Router();

order_router.get("/create", async (req, res) => {
  return res.status(200).json({ mess: "Create" });
});

order_router.post("/create", upload.single("photo"), Order_Controller.Create);

module.exports = {
  order_router,
};
