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
          avatar:
            "https://events.travelsimshop.vn/img/production/sin_mal_ind.png",
          url: "sing-mal-ind",
        },
        {
          name: "Hongkong - Trung Quốc - Macau",
          idCate: 1,
          avatar:
            "https://events.travelsimshop.vn/img/production/hongkong_1.png",
          url: "hongkong-trung-quoc-macau",
        },
        {
          name: "Thái Lan",
          idCate: 1,
          avatar: "https://events.travelsimshop.vn/img/production/thailan.png",
          url: "thai-lan",
        },
        {
          name: "Nhật Bản",
          idCate: 1,
          avatar: "https://events.travelsimshop.vn/img/production/nhatban.png",
          url: "nhat-ban",
        },
        {
          name: "ẤN Độ - Nepal",
          idCate: 1,
          avatar:
            "https://events.travelsimshop.vn/img/production/ando_nepal.png",
          url: "an-do-nepal",
        },
        {
          name: "Dubai",
          idCate: 1,
          avatar: "https://events.travelsimshop.vn/img/production/dubai.png",
          url: "dubai",
        },
        {
          name: "Hàn Quốc",
          idCate: 1,
          avatar: "https://events.travelsimshop.vn/img/production/han_nhat.png",
          url: "han-quoc",
        },
        {
          name: "Đài Loan",
          idCate: 1,
          avatar: "https://events.travelsimshop.vn/img/production/dailoan.png",
          url: "dai-loan",
        },
        //2
        {
          name: "Châu Âu",
          idCate: 2,
          avatar: "https://events.travelsimshop.vn/img/production/chau_au.png",
          url: "chau-au",
        },
        {
          name: "Mỹ",
          idCate: 2,
          avatar: "https://events.travelsimshop.vn/img/production/my.png",
          url: "my",
        },
        {
          name: "Mỹ - Canada",
          idCate: 2,
          avatar:
            "https://events.travelsimshop.vn/img/production/my_canada.png",
          url: "my-canada",
        },
        {
          name: "Thỗ Nhĩ Kỳ",
          idCate: 2,
          avatar: "https://events.travelsimshop.vn/img/production/thonhiky.png",
          url: "tho-nhi-ky",
        },
        {
          name: "Monaco",
          idCate: 2,
          avatar: "https://events.travelsimshop.vn/img/production/monaco.png",
          url: "monaco",
        },
        //3
        {
          name: "Úc",
          idCate: 3,
          avatar: "https://events.travelsimshop.vn/img/production/uc.png",
          url: "uc",
        },
        {
          name: "Nam Phi",
          idCate: 3,
          avatar: "https://events.travelsimshop.vn/img/production/namphi.png",
          url: "nam-phi",
        },
        {
          name: "Ai Cập",
          idCate: 3,
          avatar: "https://events.travelsimshop.vn/img/production/aicap.png",
          url: "ai-cap",
        },
        //4
        {
          name: "Châu Á",
          idCate: 4,
          avatar:
            "https://events.travelsimshop.vn/img/production/esim_chau_a.png",
          url: "esim-chau-a",
        },
        {
          name: "CHÂU ÂU",
          idCate: 4,
          avatar:
            "https://events.travelsimshop.vn/img/production/esim_chau_au.png",
          url: "esim-chau-au",
        },
        {
          name: "Hàn - Nhật",
          idCate: 1,
          avatar: "https://events.travelsimshop.vn/img/production/han-nhat.png",
          url: "han-nhat",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Productions", null, {});
  },
};
