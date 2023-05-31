const express = require("express");
const { Admin_Data_Controller } = require("../../../../controller/admin/data");
const reload_data_admin_router = express.Router();

reload_data_admin_router.get("/:type_data", Admin_Data_Controller.reload_data);

module.exports = {
  reload_data_admin_router,
};
