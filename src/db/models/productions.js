"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Productions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Categorys, { foreignKey: "idCate" });
      this.hasMany(models.Sims, { foreignKey: "idProduct" });
    }
  }
  Productions.init(
    {
      name: DataTypes.STRING,
      idCate: DataTypes.INTEGER,
      avatar: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Productions",
    }
  );
  return Productions;
};
