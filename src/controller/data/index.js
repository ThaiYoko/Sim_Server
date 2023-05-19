const {
  Categorys,
  Productions,
  Sims,
  Reviews,
  Banners,
} = require("../../db/models");
const data_controller = {
  load_data: async (req, res) => {
    try {
      const list_banner = await Banners.findAll();
      const listCate = await Categorys.findAll({
        include: [{ model: Productions, include: [{ model: Sims }] }],
      });
      const listProduction = await Productions.findAll({
        include: [{ model: Categorys }],
      });
      const listSim = await Sims.findAll({
        include: [{ model: Productions, include: [{ model: Categorys }] }],
      });

      const hot_sim = await Sims.findAll({
        include: [{ model: Productions, include: [{ model: Categorys }] }],
        limit: 6,
      });

      const list_reviews = await Reviews.findAll();
      return res.status(200).json({
        Banners: list_banner,
        Categorys: listCate,
        Productions: listProduction,
        Sims: listSim,
        Hot_Sims: hot_sim,
        Reviews: list_reviews,
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};

module.exports = {
  data_controller,
};
