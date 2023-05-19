const { Orders } = require("../../db/models");
const { SendMail } = require("../../middleware/sendMail");
const dotenv = require("dotenv");
dotenv.config();

const Order_Controller = {
  Create: async (req, res) => {
    const {
      store,
      name,
      adress,
      phone,
      date,
      fees_ship,
      email,
      note,
      code_bill,
    } = req.body;
    try {
      const old_bill = await Orders.findOne({
        where: {
          code_bill: code_bill,
        },
      });
      if (old_bill) {
        return res.status(400).json({ error: "Mã đơn hàng đã tồn tại!" });
      } else {
        let total_price = 0;
        store.map((item) => {
          total_price +=
            (Number(item.sim.price) -
              (Number(item.sim.price) * Number(item.sim.discount)) / 100) *
            Number(item.count);
        });
        let total_vat = (total_price * 10) / 100;
        let total = total_price + total_vat + Number(fees_ship);
        const newBill = await Orders.create({
          name: name,
          adress: adress,
          email: email,
          phone: phone,
          dateline: date,
          note: note,
          bill: JSON.stringify(store),
          code_bill: code_bill,
          fees_ship: fees_ship,
          total_vat: total_vat,
          total_price: total_price,
          total: total,
          status: "Pending",
        });
        return res.status(201).json({
          mess: "Xác nhận đơn hàng thành công!",
          Bill: newBill,
        });
      }

      // const to = "sanghuynh.pt91@gmail.com";
      // const subject = `Mã đơn hàng ${code_bill}`;
      // const html = "<h1>VUI LÒNG XÁC NHẬN ĐƠN HÀNG MỚI</h1>";
      // await SendMail(to, subject, html)
      //   .then((resul) => {
      //     return res.status(201).json(resul);
      //   })
      //   .catch((err) => {
      //     return res.status(500).json(err);
      //   });
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};

module.exports = {
  Order_Controller,
};
