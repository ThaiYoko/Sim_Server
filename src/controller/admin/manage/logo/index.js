const fs = require("fs");
const path = require("path");
const { Logos } = require("../../../../db/models");

const Admin_Logo_Controller = {
  Edit: async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
      const logo = await Logos.findOne({
        where: {
          id: id,
        },
      });
      if (req.file) {
        const baseURL = req.protocol + "://" + req.get("host");
        const pathImage = baseURL + "/img/logo/" + req.file.filename;

        if (logo) {
          const unLoad = path.join(__dirname, "../../../../public/img/logo/");

          fs.unlink(unLoad + logo.filename, async (err) => {
            if (err) {
              return res.status(500).json(err);
            } else {
              if (name !== "") {
                logo.filename = req.file.filename;
                logo.name = name;
                logo.url = pathImage;
                await logo.save();
                return res.status(200).json({ mess: "Cập nhật thành công!" });
              } else {
                logo.filename = req.file.filename;
                logo.name = req.file.filename;
                logo.url = pathImage;
                await logo.save();
                return res.status(200).json({ mess: "Cập nhật thành công!" });
              }
            }
          });
        } else {
          return res.status(400).json({ error: "Không tìm thấy logo!" });
        }
      } else {
        if (logo) {
          if (name === "") {
            logo.name = req.file.filename;
            await logo.save();
            return res.status(200).json({ mess: "Cập nhật thành công!" });
          } else {
            logo.name = name;
            await logo.save();
            return res.status(200).json({ mess: "Cập nhật thành công!" });
          }
        } else {
          return res.status(400).json({ error: "Không tìm thấy logo!" });
        }
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};
module.exports = {
  Admin_Logo_Controller,
};
