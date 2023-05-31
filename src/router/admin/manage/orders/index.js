const express = require("express");
const {
  Order_Admin_Controller,
} = require("../../../../controller/admin/manage/orders");
const admin_orders_route = express.Router();

admin_orders_route.post("/:id/:action", Order_Admin_Controller.handle_order);

module.exports = {
  admin_orders_route,
};
