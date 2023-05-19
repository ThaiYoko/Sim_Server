"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Banners",
      [
        {
          url: "https://events.travelsimshop.vn/img/banner/banner1.jpg",
          filename: "banner1.jpg",
        },
        {
          url: "https://events.travelsimshop.vn/img/banner/banner2.jpg",
          filename: "banner2.jpg",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Banners", null, {});
  },
};
