const express = require("express");
const {
  Productions_Controller,
} = require("../../../../controller/admin/manage/productions");

const multer = require("multer");
const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      return cb(null, "./src/public/img/production");
    },
    filename: (req, file, cb) => {
      const fileName = file.originalname.toLowerCase().split(" ").join("-");
      cb(null, fileName);
    },
  }),
});

const productions_router = express.Router();
//Add
productions_router.post(
  "/add",
  upload.single("photo"),
  Productions_Controller.Add
);
//Delete
productions_router.delete("/delete/:id", Productions_Controller.Delete);
//Edit
productions_router.put(
  "/edit/:id",
  upload.single("photo"),
  Productions_Controller.Edit
);

module.exports = {
  productions_router,
};
