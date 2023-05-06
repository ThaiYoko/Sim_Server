const express = require("express");
const { admin_controller } = require("../../controller/admin");
const { CheckLogin } = require("../../middleware/authen");
const banner_router = express.Router();

banner_router.post("/add", admin_controller.Banners.Add);

banner_router.delete(
  "/delete/:id",
  CheckLogin,
  admin_controller.Banners.Delete
);

banner_router.put("/edit/:id", admin_controller.Banners.Edit);

module.exports = {
  banner_router,
};
