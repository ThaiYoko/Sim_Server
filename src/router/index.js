const express = require("express");
const { data_router } = require("./data");
const { admin_router } = require("./admin");
const { banner_router } = require("./banner");
const { sendMail_router } = require("./sendMail");
const { order_router } = require("./orders");
const root_router = express.Router();

root_router.use("/data", data_router);
root_router.use("/admin", admin_router);
root_router.use("/banner", banner_router);
root_router.use("/send_mail", sendMail_router);
root_router.use("/orders", order_router);

module.exports = {
  root_router,
};
