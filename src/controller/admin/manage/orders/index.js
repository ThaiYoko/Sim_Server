const { Orders } = require("../../../../db/models");

const Order_Admin_Controller = {
  handle_order: async (req, res) => {
    const { action, id } = req.params;
    try {
      const order = await Orders.findOne({
        where: {
          id: id,
        },
      });
      if (order) {
        if (action !== "delete") {
          order.status = action;
          await order.save();
          return res.status(200).json({ mess: "Cập nhật thành công!" });
        } else {
          await order.destroy();
          return res.status(200).json({ mess: "Xóa đơn hàng thành công!" });
        }
      } else {
        return res.status(404).json({ error: "Không tìm thấy mã đơn hàng!" });
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};
module.exports = {
  Order_Admin_Controller,
};
