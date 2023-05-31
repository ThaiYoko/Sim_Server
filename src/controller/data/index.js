const {
  Categorys,
  Productions,
  Sims,
  Reviews,
  Banners,
  Logos,
  TravelSimShopContacts,
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

      const list_logo = await Logos.findAll();
      const contact = await TravelSimShopContacts.findOne();

      const list_reviews = await Reviews.findAll();
      return res.status(200).json({
        Banners: list_banner,
        Categorys: listCate,
        Productions: listProduction,
        Sims: listSim,
        Hot_Sims: hot_sim,
        Reviews: list_reviews,
        Logos: list_logo,
        TravelSimShopContact: contact,
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  },

  reload_data: async (req, res) => {
    const { type_data } = req.params;
    try {
      switch (type_data) {
        case "categorys": {
          const listCate = await Categorys.findAll({
            include: [{ model: Productions, include: [{ model: Sims }] }],
          });
          return res.status(200).json({
            Result: listCate,
          });
        }
        case "productions": {
          const listProduction = await Productions.findAll({
            include: [{ model: Categorys }],
          });
          return res.status(200).json({
            Result: listProduction,
          });
        }
        case "sims": {
          const listSim = await Sims.findAll({
            include: [{ model: Productions, include: [{ model: Categorys }] }],
          });
          return res.status(200).json({
            Result: listSim,
          });
        }
        case "banners": {
          const list_banner = await Banners.findAll();
          return res.status(200).json({
            Result: list_banner,
          });
        }
        case "contact": {
          const contact = await TravelSimShopContacts.findOne();
          return res.status(200).json({
            Result: contact,
          });
        }

        case "logos": {
          const list_logo = await Logos.findAll();
          return res.status(200).json({
            Result: list_logo,
          });
        }

        default: {
          return res.status(400).json({ error: "type_data not exits!" });
        }
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};

module.exports = {
  data_controller,
};
