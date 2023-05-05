"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Productions",
      [
        {
          name: "Singapore - Malay - Indonesia",
          idCate: 1,
          avatar: "/img/production/sin_mal_ind.png",
        },
        {
          name: "Hongkong - Trung Quốc - Macau",
          idCate: 1,
          avatar: "/img/production/hongkong_1.png",
        },
        {
          name: "Thái Lan",
          idCate: 1,
          avatar: "/img/production/thailan.png",
        },
        {
          name: "Nhật Bản",
          idCate: 1,
          avatar: "/img/production/nhatban.png",
        },
        {
          name: "ẤN Độ - Nepal",
          idCate: 1,
          avatar: "/img/production/ando_nepal.png",
        },
        {
          name: "Dubai",
          idCate: 1,
          avatar: "/img/production/dubai.png",
        },
        {
          name: "Hàn - Nhật",
          idCate: 1,
          avatar: "/img/production/han_nhat.png",
        },
        {
          name: "Đài Loan",
          idCate: 1,
          avatar: "/img/production/dailoan.png",
        },
        //2
        {
          name: "Châu Âu",
          idCate: 2,
          avatar: "/img/production/chau_au.png",
        },
        {
          name: "Mỹ",
          idCate: 2,
          avatar: "/img/production/my.png",
        },
        {
          name: "Mỹ - Canada",
          idCate: 2,
          avatar: "/img/production/my_canada.png",
        },
        {
          name: "Thỗ Nhĩ Kỳ",
          idCate: 2,
          avatar: "/img/production/thonhiky.png",
        },
        {
          name: "Monaco",
          idCate: 2,
          avatar: "/img/production/monaco.png",
        },
        //3
        {
          name: "Úc",
          idCate: 3,
          avatar: "/img/production/uc.png",
        },
        {
          name: "Nam Phi",
          idCate: 3,
          avatar: "/img/production/namphi.png",
        },
        {
          name: "Ai Cập",
          idCate: 3,
          avatar: "/img/production/aicap.png",
        },
        //4
        {
          name: "Châu Á",
          idCate: 4,
          avatar: "/img/production/esim_chau_a.png",
        },
        {
          name: "CHÂU ÂU",
          idCate: 4,
          avatar: "/img/production/esim_chau_au.png",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Productions", null, {});
  },
};
