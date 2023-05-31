const express = require("express");
const { authen_admin_controller } = require("../../../controller/admin/authen");
const { CheckAdmin } = require("../../../middleware/authen");
const admin_authen_router = express.Router();

admin_authen_router.post("/register", authen_admin_controller.Register);
admin_authen_router.post("/login", authen_admin_controller.Login);
admin_authen_router.get("/logout", authen_admin_controller.LogOut);
admin_authen_router.put("/edit/:id", CheckAdmin, authen_admin_controller.Edit);
admin_authen_router.put(
  "/change_password/:id",
  CheckAdmin,
  authen_admin_controller.Change_Password
);

module.exports = {
  admin_authen_router,
};
