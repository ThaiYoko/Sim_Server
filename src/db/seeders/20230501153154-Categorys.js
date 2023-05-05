"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Categorys",
      [
        {
          name: "Sim Châu Á",
        },
        {
          name: "Sim Châu Âu - Mỹ",
        },
        {
          name: "Sim Châu Úc - Phi",
        },
        {
          name: "ESIM",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Categorys", null, {});
  },
};
