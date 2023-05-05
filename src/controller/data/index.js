const { Categorys } = require("../../db/models");
const data_controller = {
  load_data: async (req, res) => {
    try {
      const list_cate = await Categorys.findAll();
      return res.status(200).json({
        Categorys: list_cate,
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};

module.exports = {
  data_controller,
};
