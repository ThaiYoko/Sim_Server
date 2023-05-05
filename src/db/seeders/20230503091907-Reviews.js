"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Reviews",
      [
        {
          name: "Trần Thị Kim Hồng",
          rating: 4.5,
          avatar: "/img/avatar/kh.jpg",
          text: "Tôi đã biết vì sao các công ty du lịch tôi hay đi luôn chọn sim du lịch của Sim Station cho khách hàng sử dụng. Gần đây tôi có chuyến đi du lịch tự túc, tôi cũng liên hệ mua sim ở Sim Station, chất lượng sim tốt khỏi nói, mạng mạnh, lượt fb, lướt web thoải mái, đi chơi mà tôi vãn gửi mail ầm ầm, công việc không bị gián đoạn. Chắc chắn sẽ quay lại mua nhiều lần nữa.",
        },
        {
          name: "Nguyễn Toàn Xuân",
          rating: 4.8,
          avatar: "/img/avatar/h2.jpg",
          text: "Là khách hàng cũ mua lại này là lần thứ 3, Sim Station chưa bao giờ làm mình thất vọng, sim chất lượng, giá hợp lý mà nhân viên còn tận tình hỗ trợ nữa.",
        },
        {
          name: "Dương Hoàng Khang",
          rating: 4.8,
          avatar: "/img/avatar/ma.jpg",
          text: "Mình vừa đặt 2 sim cho 2 vợ chồng đi thăm con gái du học ở Mỹ, sử dụng rất đã, lướt web ầm ầm, gửi mail, gửi file vèo 1 cái là đi… không ảnh hưởng đến công việc. Nhân viên tư vấn hỗ trợ nhiệt tình, thân thiện, chắc chắn sẽ quay lại mua tiếp.",
        },
        {
          name: "Trần Thị Kim Ánh",
          rating: 4,
          avatar: "/img/avatar/t.jpg",
          text: "Tôi đã biết vì sao các công ty du lịch tôi hay đi luôn chọn sim du lịch của Sim Station cho khách hàng sử dụng. Gần đây tôi có chuyến đi du lịch tự túc, tôi cũng liên hệ mua sim ở Sim Station, chất lượng sim tốt khỏi nói, mạng mạnh, lượt fb, lướt web thoải mái, đi chơi mà tôi vãn gửi mail ầm ầm, công việc không bị gián đoạn. Chắc chắn sẽ quay lại mua nhiều lần nữa.",
        },
        {
          name: "Nguyễn Trường Thoại",
          rating: 4,
          avatar: "/img/avatar/va.jpg",
          text: "Là khách hàng cũ mua lại này là lần thứ 3, Sim Station chưa bao giờ làm mình thất vọng, sim chất lượng, giá hợp lý mà nhân viên còn tận tình hỗ trợ nữa.",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Reviews", null, {});
  },
};
