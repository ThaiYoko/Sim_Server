const admin_controller = {
  Banners: {
    Add: async (req, res) => {
      try {
        return res.status(200).json({ mess: "Thêm mới banner" });
      } catch (error) {
        return res.status(500).json(error);
      }
    },
    Delete: async (req, res) => {
      try {
        const { id } = req.params;
        return res.status(200).json({ mess: `Xóa banner id = ${id}` });
      } catch (error) {
        return res.status(500).json(error);
      }
    },
    Edit: async (req, res) => {
      try {
        const { id } = req.params;
        return res.status(200).json({ mess: `Sửa banner id = ${id}` });
      } catch (error) {
        return res.status(500).json(error);
      }
    },
  },
};

module.exports = {
  admin_controller,
};
