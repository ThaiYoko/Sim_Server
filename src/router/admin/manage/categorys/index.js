const express = require("express");
const {
  Categorys_Controller,
} = require("../../../../controller/admin/manage/categorys");
const categorys_router = express.Router();

categorys_router.post("/add", Categorys_Controller.Add);
categorys_router.delete("/delete/:id", Categorys_Controller.Delete);
categorys_router.put("/edit/:id", Categorys_Controller.Edit);

module.exports = {
  categorys_router,
};
