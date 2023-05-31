const express = require("express");
const multer = require("multer");
const {
  Admin_Logo_Controller,
} = require("../../../../controller/admin/manage/logo");
const { CheckAdmin } = require("../../../../middleware/authen");

let d = new Date().getTime();
const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      return cb(null, "./src/public/img/logo");
    },
    filename: (req, file, cb) => {
      const fileName =
        d + "-" + file.originalname.toLowerCase().split(" ").join("-");
      cb(null, fileName);
    },
  }),
});

const admin_logo_router = express.Router();
admin_logo_router.put(
  "/edit/:id",
  CheckAdmin,
  upload.single("photo"),
  Admin_Logo_Controller.Edit
);
module.exports = {
  admin_logo_router,
};
