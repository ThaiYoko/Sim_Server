const express = require("express");
const { Order_Controller } = require("../../controller/orders");
const order_router = express.Router();
order_router.post("/create", Order_Controller.Create);

module.exports = {
  order_router,
};
