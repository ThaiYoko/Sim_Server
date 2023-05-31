const express = require("express");
const { categorys_router } = require("./categorys");
const { productions_router } = require("./productions");
const { sims_router } = require("./sims");
const { admin_orders_route } = require("./orders");
const { banner_admin_router } = require("./banner");
const { admin_logo_router } = require("./logo");

const admin_manage_route = express.Router();

admin_manage_route.use("/categorys", categorys_router);
admin_manage_route.use("/productions", productions_router);
admin_manage_route.use("/sims", sims_router);
admin_manage_route.use("/orders", admin_orders_route);
admin_manage_route.use("/banners", banner_admin_router);
admin_manage_route.use("/logo", admin_logo_router);

module.exports = {
  admin_manage_route,
};
