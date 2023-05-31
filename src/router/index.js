const express = require("express");
const { data_router } = require("./data");
const { admin_router } = require("./admin");
const { order_router } = require("./orders");
const root_router = express.Router();

root_router.use("/data", data_router);
root_router.use("/admin", admin_router);
root_router.use("/orders", order_router);

module.exports = {
  root_router,
};
