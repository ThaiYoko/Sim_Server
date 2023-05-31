"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "SimContacts",
      [
        {
          name: "TravelSimShop",
          email: "globalsimshop@gmail.com",
          phone: "093.856.1002",
          facebook: "https://www.facebook.com/travelsimshop",
          zalo: "093.856.1002",
          website: "travelsimshop.vn",
          adress: "84 Lê Quang Định, P.14, Q.Bình Thạnh, TP.HCM",
          serevices:
            "Sim Du Lịch Quốc Tế 5G/4G||Esim Du Lịch Quốc Tế 5G/4G||Sim Châu Âu, Úc, Mỹ, Canada nghe gọi + data",
        },
      ],
      {}
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("SimContacts", null, {});
  },
};
