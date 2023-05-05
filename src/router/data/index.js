const express = require("express");
const { data_controller } = require("../../controller/data");

const data_router = express.Router();

data_router.get("/", data_controller.load_data);

module.exports = {
  data_router,
};
