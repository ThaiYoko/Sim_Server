const { Banners } = require("../../../../db/models");
const fs = require("fs");
const path = require("path");

const Banner_Admin_Controller = {
  Add: async (req, res) => {
    try {
      if (req.file) {
        const baseURL = req.protocol + "://" + req.get("host");
        const pathImage = baseURL + "/img/banner/" + req.file.filename;
        const old_banner = await Banners.findOne({
          where: {
            url: pathImage,
          },
        });
        if (old_banner) {
          //Xóa ảnh vừa tải lên
          const unLoad = path.join(__dirname, "../../../../public/img/banner/");

          fs.unlink(unLoad + req.file.filename, async (err) => {
            if (err) {
              return res.status(500).json(err);
            } else {
              return res.status(400).json({ error: "Banner đã tồn tại!" });
            }
          });
        } else {
          await Banners.create({
            url: pathImage,
            filename: req.file.filename,
          });
          return res.status(201).json({ mess: "Thêm mới thành công!" });
        }
      } else {
        return res.status(400).json({ error: "Banner không được thiếu." });
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  Edit: async (req, res) => {
    const { id } = req.params;
    try {
      if (req.file) {
        const baseURL = req.protocol + "://" + req.get("host");
        const pathImage = baseURL + "/img/banner/" + req.file.filename;
        const banner = await Banners.findOne({
          where: {
            id: id,
          },
        });
        if (banner) {
          const unLoad = path.join(__dirname, "../../../../public/img/banner/");
          //Xóa ảnh củ
          fs.unlink(unLoad + banner.filename, async (err) => {
            if (err) {
              return res.status(500).json(err);
            } else {
              banner.url = pathImage;
              banner.filename = req.file.filename;
              await banner.save();
              return res.status(200).json({ mess: "Cập nhật thành công!" });
            }
          });
        } else {
          return res.status(404).json({ error: "Banner không tồn tại!" });
        }
      } else {
        return res.status(400).json({ error: "Hình ảnh không được thiếu." });
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  },

  Delete: async (req, res) => {
    const { id } = req.params;
    try {
      const banner = await Banners.findOne({
        where: {
          id: id,
        },
      });
      if (banner) {
        const unLoad = path.join(__dirname, "../../../../public/img/banner/");
        //Xóa ảnh củ
        fs.unlink(unLoad + banner.filename, async (err) => {
          if (err) {
            return res.status(500).json(err);
          } else {
            await banner.destroy();
            return res.status(200).json({ mess: "Xóa banner thành công!" });
          }
        });
      } else {
        return res.status(404).json({ error: "Banner không tồn tại!" });
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};
module.exports = {
  Banner_Admin_Controller,
};
