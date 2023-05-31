"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Orders.init(
    {
      name: DataTypes.STRING,
      adress: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      dateline: DataTypes.STRING,
      note: DataTypes.TEXT,
      bill: DataTypes.TEXT,
      code_bill: DataTypes.STRING,
      total: DataTypes.STRING,
      status: DataTypes.STRING,
      url_image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Orders",
    }
  );
  return Orders;
};
