const { Categorys } = require("../../db/models");
const sim_controller = {
  get_sim_by_id_cate: async (req, res) => {
    const { id } = req.params;
    try {
      const cate = await Categorys.findOne({
        where: {
          id: id,
        },
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};
