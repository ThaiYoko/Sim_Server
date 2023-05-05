const express = require("express");
const { data_router } = require("./data");

const root_router = express.Router();

root_router.use("/data", data_router);

module.exports = {
  root_router,
};
