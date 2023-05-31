const express = require("express");

const banner_admin_router = express.Router();

const multer = require("multer");
const {
  Banner_Admin_Controller,
} = require("../../../../controller/admin/manage/banners");
const { CheckAdmin } = require("../../../../middleware/authen");
const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      return cb(null, "./src/public/img/banner");
    },
    filename: (req, file, cb) => {
      const fileName = file.originalname.toLowerCase().split(" ").join("-");
      cb(null, fileName);
    },
  }),
});

banner_admin_router.post(
  "/add",
  CheckAdmin,
  upload.single("photo"),
  Banner_Admin_Controller.Add
);

banner_admin_router.delete(
  "/delete/:id",
  CheckAdmin,
  Banner_Admin_Controller.Delete
);

banner_admin_router.put(
  "/edit/:id",
  CheckAdmin,
  upload.single("photo"),
  Banner_Admin_Controller.Edit
);
module.exports = {
  banner_admin_router,
};
