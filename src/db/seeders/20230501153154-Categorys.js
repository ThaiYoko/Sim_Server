"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Categorys",
      [
        {
          name: "Sim Châu Á",
          url: "sim_chau_a",
        },
        {
          name: "Sim Châu Âu - Mỹ",
          url: "sim_chau_au_my",
        },
        {
          name: "Sim Châu Úc - Phi",
          url: "sim_chau_uc_phi",
        },
        {
          name: "ESIM",
          url: "esim",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Categorys", null, {});
  },
};
