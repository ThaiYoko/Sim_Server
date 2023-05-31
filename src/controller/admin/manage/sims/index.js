const { Op } = require("sequelize");
const { Sims } = require("../../../../db/models");

const Sims_Controller = {};
module.exports = {
  Sims_Controller: {
    Add: async (req, res) => {
      try {
        const {
          idProduct,
          url,
          name,
          total_data,
          price,
          discount,
          speed_data,
          advantage,
          expiry,
          active,
          telco,
          size_sim,
          limit,
          hotspot,
          call,
          surplus,
          use_call,
          use_data,
          use_manual,
          common,
          number_selled,
          number_order,
          number_inventory,
        } = req.body;
        const old_sim = await Sims.findOne({
          where: {
            [Op.and]: [{ name: name }, { url: url }, { idProduct: idProduct }],
          },
        });
        if (old_sim) {
          return res.status(400).json({ error: "Sim đã tồn tại!" });
        } else {
          await Sims.create({
            idProduct: idProduct,
            url: url,
            name: name,
            total_data: total_data,
            price: price,
            discount: discount,
            speed_data: speed_data,
            advantage: advantage,
            expiry: expiry,
            active: active,
            telco: telco,
            size_sim: size_sim,
            limit: limit,
            hotspot: hotspot,
            call: call,
            surplus: surplus,
            use_call: use_call,
            use_data: use_data,
            use_manual: use_manual,
            common: common,
            number_selled: number_selled,
            number_order: number_order,
            number_inventory: number_inventory,
          });
          return res.status(201).json({ mess: "Thêm mới thành công!" });
        }
      } catch (error) {
        return res.status(500).json(error);
      }
    },
    Delete: async (req, res) => {
      const { id } = req.params;
      try {
        const sim = await Sims.findOne({
          where: {
            id: id,
          },
        });
        if (sim) {
          await sim.destroy();
          return res.status(200).json({ mess: "Xóa thành công!" });
        } else {
          return res.status(404).json({ error: "Sim không tồn tại!" });
        }
      } catch (error) {
        return res.status(500).json(error);
      }
    },
    Edit: async (req, res) => {
      try {
        const {
          url,
          name,
          total_data,
          price,
          discount,
          speed_data,
          advantage,
          expiry,
          active,
          telco,
          size_sim,
          limit,
          hotspot,
          call,
          surplus,
          use_call,
          use_data,
          use_manual,
          common,
          number_selled,
          number_order,
          number_inventory,
        } = req.body;
        const { id } = req.params;
        const sim = await Sims.findOne({
          where: {
            id: id,
          },
        });
        if (sim) {
          sim.url = url;
          sim.name = name;
          sim.total_data = total_data;
          sim.price = price;
          sim.discount = discount;
          sim.speed_data = speed_data;
          sim.advantage = advantage;
          sim.expiry = expiry;
          sim.active = active;
          sim.telco = telco;
          sim.size_sim = size_sim;
          sim.limit = limit;
          sim.hotspot = hotspot;
          sim.call = call;
          sim.surplus = surplus;
          sim.use_call = use_call;
          sim.use_data = use_data;
          sim.use_manual = use_manual;
          sim.common = common;
          sim.number_selled = number_selled;
          sim.number_order = number_order;
          sim.number_inventory = number_inventory;
          await sim.save();
          return res.status(200).json({ mess: "Cập nhật thành công!" });
        } else {
          return res.status(404).json({ error: "Sản phẩm không tồn tại!" });
        }
      } catch (error) {
        return res.status(500).json(error);
      }
    },
    Edit_2: async (req, res) => {},
  },
};
