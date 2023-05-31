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
      idProduct: {
        type: Sequelize.INTEGER,
        references: {
          model: "Productions",
          key: "id",
        },
      },
      url: {
        type: Sequelize.STRING,
      },
      name: {
        type: Sequelize.STRING,
      },
      total_data: {
        type: Sequelize.INTEGER,
      },
      price: {
        type: Sequelize.STRING,
      },
      discount: {
        type: Sequelize.STRING,
      },
      speed_data: {
        type: Sequelize.STRING,
      },
      advantage: {
        type: Sequelize.STRING,
      },
      expiry: {
        type: Sequelize.INTEGER,
      },
      active: {
        type: Sequelize.BOOLEAN,
      },
      telco: {
        type: Sequelize.STRING,
      },
      size_sim: {
        type: Sequelize.STRING,
      },
      limit: {
        type: Sequelize.STRING,
      },
      hotspot: {
        type: Sequelize.BOOLEAN,
      },
      call: {
        type: Sequelize.BOOLEAN,
      },
      surplus: {
        type: Sequelize.STRING,
      },
      use_call: {
        type: Sequelize.TEXT,
      },
      use_data: {
        type: Sequelize.TEXT,
      },
      use_manual: {
        type: Sequelize.TEXT,
      },
      common: {
        type: Sequelize.BOOLEAN,
      },
      number_selled: {
        type: Sequelize.INTEGER,
      },
      number_order: {
        type: Sequelize.INTEGER,
      },
      number_inventory: {
        type: Sequelize.INTEGER,
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
