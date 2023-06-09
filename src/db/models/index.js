"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const process = require("process");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = {};
const Users = require("./users");
const Categorys = require("./categorys");
const Productions = require("./productions");
const Sims = require("./sims");
const Reviews = require("./reviews");
const Banners = require("./banners");
const Orders = require("./orders");
const RefreshTokens = require("./refreshtokens");
const Logos = require("./logos");
const TravelSimShopContacts = require("./simcontact");

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

db.Users = Users(sequelize, Sequelize);
db.Categorys = Categorys(sequelize, Sequelize);
db.Productions = Productions(sequelize, Sequelize);
db.Sims = Sims(sequelize, Sequelize);
db.Reviews = Reviews(sequelize, Sequelize);
db.Banners = Banners(sequelize, Sequelize);
db.Orders = Orders(sequelize, Sequelize);
db.RefreshTokens = RefreshTokens(sequelize, Sequelize);
db.Logos = Logos(sequelize, Sequelize);
db.TravelSimShopContacts = TravelSimShopContacts(sequelize, Sequelize);

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
