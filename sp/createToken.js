const dotenv = require("dotenv");
dotenv.config();
const jwt = require("jsonwebtoken");

const create_accesstoken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      admin: user.admin,
    },
    process.env.ACCESS_TOKEN_KEY,
    { expiresIn: "30s" }
  );
};

const create_refreshtoken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      admin: user.admin,
    },
    process.env.REFRESH_TOKEN_KEY,
    { expiresIn: "23h" }
  );
};

module.exports = {
  create_accesstoken,
  create_refreshtoken,
};
