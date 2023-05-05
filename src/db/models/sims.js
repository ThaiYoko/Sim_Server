"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Sims extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Productions, { foreignKey: "idProduct" });
    }
  }
  Sims.init(
    {
      name: DataTypes.STRING,
      expiry: DataTypes.INTEGER,
      size_data: DataTypes.STRING,
      telco: DataTypes.STRING,
      limit: DataTypes.STRING,
      wifi_hostpot: DataTypes.BOOLEAN,
      call: DataTypes.BOOLEAN,
      size_sim: DataTypes.STRING,
      idProduct: DataTypes.INTEGER,
      avatar: DataTypes.STRING,
      order: DataTypes.INTEGER,
      inventory: DataTypes.INTEGER,
      selled: DataTypes.INTEGER,
      common: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Sims",
    }
  );
  return Sims;
};
