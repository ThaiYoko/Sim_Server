const express = require("express");
const { Admin_Data_Controller } = require("../../../controller/admin/data");
const { reload_data_admin_router } = require("./reload_data_admin");

const data_admin_router = express.Router();

data_admin_router.get("/", Admin_Data_Controller.load_data);
data_admin_router.use("/reload", reload_data_admin_router);

module.exports = {
  data_admin_router,
};
