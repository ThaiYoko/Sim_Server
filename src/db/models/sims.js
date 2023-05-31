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
      idProduct: DataTypes.INTEGER,
      url: DataTypes.STRING,
      name: DataTypes.STRING,
      total_data: DataTypes.INTEGER,
      price: DataTypes.STRING,
      discount: DataTypes.STRING,
      speed_data: DataTypes.STRING,
      advantage: DataTypes.STRING,
      expiry: DataTypes.INTEGER,
      active: DataTypes.BOOLEAN,
      telco: DataTypes.STRING,
      size_sim: DataTypes.STRING,
      limit: DataTypes.STRING,
      hotspot: DataTypes.BOOLEAN,
      call: DataTypes.BOOLEAN,
      surplus: DataTypes.STRING,
      use_call: DataTypes.TEXT,
      use_data: DataTypes.TEXT,
      use_manual: DataTypes.TEXT,
      common: DataTypes.BOOLEAN,
      number_selled: DataTypes.INTEGER,
      number_order: DataTypes.INTEGER,
      number_inventory: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Sims",
    }
  );
  return Sims;
};
