const { TravelSimShopContacts } = require("../../../db/models");

const Admin_Contact_Controller = {
  Edit: async (req, res) => {
    const { name, email, phone, facebook, zalo, website, adress, serevices } =
      req.body;
    try {
      const contact = await TravelSimShopContacts.findOne();
      if (contact) {
        await contact.update({
          name,
          email,
          phone,
          facebook,
          zalo,
          website,
          adress,
          serevices,
        });
        return res.status(200).json({ mess: "Cập nhật thành công!" });
      } else {
        return res
          .status(404)
          .json({ error: "TravelSimShopContact không tồn tại!" });
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};

module.exports = {
  Admin_Contact_Controller,
};
