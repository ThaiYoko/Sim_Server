const { Op } = require("sequelize");
const { removeVietnameseTones } = require("../../../../../sp/changeLanguage");
const { Productions, Categorys, Sims } = require("../../../../db/models");
const fs = require("fs");
const path = require("path");

const Productions_Controller = {
  Add: async (req, res) => {
    const { name, url, idCate } = req.body;
    try {
      if (req.file) {
        const baseURL = req.protocol + "://" + req.get("host");
        const pathImage = baseURL + "/img/production/" + req.file.filename;
        const cate = await Categorys.findOne({
          where: {
            id: idCate,
          },
        });
        if (cate) {
          const old_prd = await Productions.findOne({
            where: {
              [Op.and]: [{ idCate: idCate }, { name: name }, { url: url }],
            },
          });
          if (old_prd) {
            return res.status(400).json({ error: "Khu vực đã tồn tại!" });
          } else {
            const new_prd = await Productions.create({
              name: name,
              idCate: idCate,
              url: url,
              avatar: pathImage,
            });
            return res
              .status(201)
              .json({ mess: "Thêm mới thành công!", Production: new_prd });
          }
        } else {
          return res.status(404).json({ error: "Category not found!" });
        }
      } else {
        return res.status(400).json({ error: "Hình ảnh không được để trống!" });
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  Delete: async (req, res) => {
    const { id } = req.params;
    try {
      const prd = await Productions.findOne({
        where: {
          id: id,
        },
      });
      if (prd) {
        //Xóa ảnh của khu vực
        const array = prd.avatar.split("/");
        const filename = array[array.length - 1];
        const unLoad = path.join(
          __dirname,
          "../../../../public/img/production/"
        );

        fs.unlink(unLoad + filename, async (err) => {
          if (err) {
            return res.status(500).json(err);
          } else {
            //Xóa toàn bộ sim thuộc khu vực
            await Sims.destroy({
              where: {
                idProduct: prd.id,
              },
            });
            await prd.destroy();
            return res.status(200).json({ mess: "Xóa thành công!" });
          }
        });
      } else {
        return res.status(404).json({ error: "Khu vực không tồn tại!" });
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  Edit: async (req, res) => {
    const { id } = req.params;
    const { name, url } = req.body;

    try {
      if (req.file) {
        const baseURL = req.protocol + "://" + req.get("host");
        const pathImage = baseURL + "/img/production/" + req.file.filename;
        //Tìm prd
        const prd = await Productions.findOne({
          where: {
            id: id,
          },
        });
        if (prd) {
          //Tìm file ảnh củ
          const array = prd.avatar.split("/");
          const filename = array[array.length - 1];
          const unLoad = path.join(
            __dirname,
            "../../../../public/img/production/"
          );
          //Xóa file ảnh củ
          fs.unlink(unLoad + filename, async (err) => {
            if (err) {
              return res.status(500).json(err);
            } else {
              //Chỉnh sửa prd
              prd.name = name;
              prd.url = url;
              prd.avatar = pathImage;
              await prd.save();
              return res.status(200).json({ mess: "Cập nhật thành công!" });
            }
          });
        } else {
          return res.status(404).json({ error: "Khu vực không tồn tại!" });
        }
      } else {
        //Tìm prd
        const prd = await Productions.findOne({
          where: {
            id: id,
          },
        });
        if (prd) {
          prd.name = name;
          prd.url = url;
          await prd.save();
          return res.status(200).json({ mess: "Cập nhật thành công!" });
        } else {
          return res.status(404).json({ error: "Khu vực không tồn tại!" });
        }
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};

module.exports = {
  Productions_Controller,
};
