const { Create_innerHtml_sendMail } = require("../../../sp");
const { Orders } = require("../../db/models");
const { SendMail } = require("../../middleware/sendMail");
const dotenv = require("dotenv");
dotenv.config();

const Order_Controller = {
  Create: async (req, res) => {
    const { store, name, adress, phone, dateline, email, note, code_bill } =
      req.body;

    try {
      const array = JSON.parse(store);
      let total = 0;
      array.map((item) => {
        total +=
          (Number(item.sim.price) -
            (Number(item.sim.price) * item.sim.discount) / 100) *
          item.count;
      });

      const old_bill = await Orders.findOne({
        where: {
          code_bill: code_bill,
        },
      });

      if (old_bill) {
        return res.status(400).json({ error: "Mã đơn hàng đã tồn tại!" });
      } else {
        if (req.file) {
          const baseURL = req.protocol + "://" + req.get("host");
          const pathImage = baseURL + "/img/prepay/" + req.file.filename;
          const newBill = await Orders.create({
            name: name,
            adress: adress,
            email: email,
            phone: phone,
            dateline: dateline,
            note: note,
            bill: store,
            code_bill: code_bill,
            total: total,
            status: "pending",
            url_image: pathImage,
          });

          const html = Create_innerHtml_sendMail(array, newBill);
          const subject = "Đơn hàng " + newBill.code_bill;
          const array_gmail = process.env.RECEIVE_ADRESS.split(",");
          array_gmail?.map(async (to) => {
            await SendMail(to, subject, html);
          });
          return res
            .status(201)
            .json({ mess: "Khởi tạo đơn hàng thành công!" });
        } else {
          const newBill = await Orders.create({
            name: name,
            adress: adress,
            email: email,
            phone: phone,
            dateline: dateline,
            note: note,
            bill: store,
            code_bill: code_bill,
            total: total,
            status: "pending",
          });

          const html = Create_innerHtml_sendMail(array, newBill);
          const subject = "Đơn hàng " + newBill.code_bill;
          await SendMail(process.env.RECEIVE_ADRESS, subject, html)
            .then((result) => {
              return res.status(201).json({
                mess: "Khởi tạo đơn hàng thành công!",
                Result: result,
              });
            })
            .catch((err) => {
              return res.status(500).json(err);
            });
        }
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};

module.exports = {
  Order_Controller,
};
