const express = require("express");
const { admin_authen_router } = require("./authen");
const { admin_manage_route } = require("./manage");
const { data_admin_router } = require("./data");
const { token_admin_router } = require("./token");
const { admin_contact_router } = require("./contact");
const admin_router = express.Router();

admin_router.use("/authen", admin_authen_router);
admin_router.use("/manage", admin_manage_route);
admin_router.use("/data", data_admin_router);
admin_router.use("/token", token_admin_router);
admin_router.use("/contact", admin_contact_router);

module.exports = {
  admin_router,
};
