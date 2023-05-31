const express = require("express");
const { CheckAdmin } = require("../../../middleware/authen");
const {
  Admin_Contact_Controller,
} = require("../../../controller/admin/contact");

const admin_contact_router = express.Router();

admin_contact_router.put("/edit", CheckAdmin, Admin_Contact_Controller.Edit);

module.exports = {
  admin_contact_router,
};
