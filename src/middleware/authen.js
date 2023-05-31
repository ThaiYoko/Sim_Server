const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const CheckAdmin = async (req, res, next) => {
  const { accesstoken } = req.headers;
  try {
    if (accesstoken) {
      const token = accesstoken.split(" ")[1];
      jwt.verify(token, process.env.ACCESS_TOKEN_KEY, (err, user) => {
        if (err) {
          console.log(err);
          return res.status(403).json({ error: "Token không hợp lệ!" }); //
        } else {
          if (user.admin) {
            next();
          } else {
            return res.status(401).json({ error: "Không đc phép truy cập!" });
          }
        }
      });
    } else {
      return res.status(400).json({ error: "Bạn chưa đăng nhập!" }); //
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  CheckAdmin,
};
