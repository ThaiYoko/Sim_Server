const { Orders, Users } = require("../../../db/models");

const Admin_Data_Controller = {
  load_data: async (req, res) => {
    try {
      const list_orders = await Orders.findAll();
      user_count = await Users.count();
      return res.status(200).json({
        Orders: list_orders,
        User_Count: user_count,
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  reload_data: async (req, res) => {
    const { type_data } = req.params;
    try {
      switch (type_data) {
        case "orders": {
          const list_orders = await Orders.findAll();
          return res.status(200).json({
            Result: list_orders,
          });
        }
        default: {
          return res.status(400).json({ error: "type_data không hợp lệ!" });
        }
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};
module.exports = {
  Admin_Data_Controller,
};
