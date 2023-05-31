"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Orders", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      adress: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      phone: {
        type: Sequelize.STRING,
      },
      dateline: {
        type: Sequelize.STRING,
      },
      note: {
        type: Sequelize.TEXT,
      },
      bill: {
        type: Sequelize.TEXT,
      },
      code_bill: {
        type: Sequelize.STRING,
      },
      fees_ship: {
        type: Sequelize.STRING,
      },
      total_vat: {
        type: Sequelize.STRING,
      },
      total_price: {
        type: Sequelize.STRING,
      },
      total: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.STRING,
      },
      url_image: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("Orders");
  },
};
