const express = require("express");
const { Admin_Token_Controller } = require("../../../controller/admin/token");
const token_admin_router = express.Router();

token_admin_router.get("/refreshtoken", async (req, res) => {
  return res.status(200).json({ mess: "123" });
});
token_admin_router.post("/refreshtoken", Admin_Token_Controller.RefreshToken);

module.exports = {
  token_admin_router,
};
