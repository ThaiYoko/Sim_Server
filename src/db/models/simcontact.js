"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class SimContacts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SimContacts.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      facebook: DataTypes.STRING,
      zalo: DataTypes.STRING,
      website: DataTypes.STRING,
      adress: DataTypes.STRING,
      serevices: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "SimContact",
    }
  );
  return SimContacts;
};
