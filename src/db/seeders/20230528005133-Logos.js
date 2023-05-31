"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Logos",
      [
        {
          filename: "dark.png",
          url: "https://events.travelsimshop.vn/img/logo/dark.png",
          name: "Logo_Dark",
        },
        {
          filename: "light.png",
          url: "https://events.travelsimshop.vn/img/logo/light.png",
          name: "Logo_Light",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Logos", null, {});
  },
};
