const express = require("express");
const { data_router } = require("./data");
const { admin_router } = require("./admin");
const { banner_router } = require("./banner");

const root_router = express.Router();

root_router.use("/data", data_router);
root_router.use("/admin", admin_router);
root_router.use("/banner", banner_router);

module.exports = {
  root_router,
};
