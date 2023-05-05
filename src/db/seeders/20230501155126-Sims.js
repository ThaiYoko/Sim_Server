"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Sims",
      [
        {
          name: "Sim 4G SING-MAL-INDO 4N 2GB/NGÀY",
          expiry: 4,
          size_data: "2GB",
          telco:
            "Malaysia: Celdom, DiGi||Indonesia: XL||Singapore: Starhub, Singtel",
          limit: "Singapore - Malaysia - Indonesia",
          idProduct: 1,
          order: 10,
          inventory: 152,
          selled: 256,
          common: true,
        },
        {
          name: "Sim 4G SING-MAL-INDO 4NT 3GB",
          expiry: 4,
          size_data: "3GB",
          telco: "Malaysia: Maxis||Indonesia: Telkomsel||Singapore: Singtel",
          limit: "Singapore - Malaysia - Indonesia",
          idProduct: 1,
          order: 8,
          inventory: 100,
          selled: 100,
        },
        {
          name: "SIM CHÂU ÂU 8 NGÀY 2GB/NGÀY",
          expiry: 8,
          size_data: "2GB",
          telco: "các mạng ưu tú tại châu âu",
          limit: "EU",
          idProduct: 9,
          order: 16,
          inventory: 20,
          selled: 300,
          common: true,
        },
        {
          name: "SIM CHÂU ÂU 12GB/30 NGÀY",
          expiry: 30,
          size_data: "12",
          telco: "SoftBank",
          limit: "EU",
          idProduct: 9,
          order: 25,
          inventory: 65,
          selled: 40,
        },
        {
          name: "Sim Úc Optus Local 28N",
          expiry: 28,
          size_data: "40GB",
          telco: "Optus",
          limit: "Úc",
          call: true,
          idProduct: 14,
          order: 5,
          inventory: 99,
          selled: 213,
          common: true,
        },
        {
          name: "ESIM HÀN QUỐC 5N 1GB/NGÀY",
          expiry: 5,
          size_data: "1GB",
          telco: "KT",
          limit: "HÀN QUỐC",
          size_sim: "QR code",
          idProduct: 17,
          order: 6,
          inventory: 20,
          selled: 185,
        },
        {
          name: "ESIM SING-MA-INDO 6N 2GB/NGÀY",
          expiry: 6,
          size_data: "2GB",
          telco:
            "Malaysia: Celdom, DiGi||Indonesia: XL||Singapore: Starhub, M1",
          limit: "Singapore - Malaysia - Indonesia",
          size_sim: "QR code",
          idProduct: 17,
          order: 34,
          inventory: 125,
          selled: 541,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Sims", null, {});
  },
};
