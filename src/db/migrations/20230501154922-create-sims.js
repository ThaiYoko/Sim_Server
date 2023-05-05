"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Sims", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      expiry: {
        type: Sequelize.INTEGER,
      },
      size_data: {
        type: Sequelize.STRING,
      },
      telco: {
        type: Sequelize.STRING,
      },
      limit: {
        type: Sequelize.STRING,
      },
      wifi_hostpot: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      call: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      size_sim: {
        type: Sequelize.STRING,
        defaultValue: "sim thường/ micro/ nano",
      },
      idProduct: {
        type: Sequelize.INTEGER,
        references: {
          model: "Productions",
          key: "id",
        },
      },
      avatar: {
        type: Sequelize.STRING,
      },
      order: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      inventory: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
      },
      selled: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      common: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Sims");
  },
};
