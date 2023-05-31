const { Op } = require("sequelize");
const { removeVietnameseTones } = require("../../../../../sp/changeLanguage");
const { Categorys, Productions, Sims } = require("../../../../db/models");

const Categorys_Controller = {
  Add: async (req, res) => {
    const { name } = req.body;
    try {
      console.log(name);
      const old_cate = await Categorys.findOne({
        where: {
          name: name,
        },
      });
      if (old_cate) {
        return res.status(400).json({ error: "Categorys đã tồn tại!" });
      } else {
        const url = removeVietnameseTones(name)
          .split(" ")
          .join("_")
          .toLowerCase();
        const newCate = await Categorys.create({
          name: name,
          url: url,
        });
        return res
          .status(201)
          .json({ mess: "Thêm mới thành công!", New_Cate: newCate });
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  Delete: async (req, res) => {
    const { id } = req.params;
    try {
      const cate = await Categorys.findOne({
        where: {
          id: id,
        },
      });

      if (cate) {
        const list_prd = await Productions.findAll({
          where: {
            idCate: cate.id,
          },
        });
        //xóa sim
        list_prd.map(async (item) => {
          await Sims.destroy({
            where: {
              idProduct: item.id,
            },
          });
        });
        //Xóa prd
        await Productions.destroy({
          where: {
            idCate: cate.id,
          },
        });
        await cate.destroy();
        return res.status(200).json({ mess: "Xóa thành 2 công!" });
      } else {
        return res.status(404).json({ error: "Không tìm thấy vùng!" });
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  Edit: async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
      const cate = await Categorys.findOne({
        where: {
          id: id,
        },
      });
      if (cate) {
        cate.name = name;
        cate.url = removeVietnameseTones(name)
          .split(" ")
          .join("_")
          .toLowerCase();
        await cate.save().then((newCate) => {
          return res
            .status(200)
            .json({ mess: "Edit success!", Cate_Edit: newCate });
        });
      } else {
        return res.status(404).json({ error: "Category not found!" });
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};

module.exports = {
  Categorys_Controller,
};
