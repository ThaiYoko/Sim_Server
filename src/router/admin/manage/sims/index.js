const express = require("express");
const { Sims_Controller } = require("../../../../controller/admin/manage/sims");

const sims_router = express.Router();

sims_router.put("/edit/:id", Sims_Controller.Edit);
sims_router.delete("/delete/:id", Sims_Controller.Delete);
sims_router.post("/create", Sims_Controller.Add);

module.exports = {
  sims_router,
};
