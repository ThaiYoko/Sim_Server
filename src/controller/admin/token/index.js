const {
  create_accesstoken,
  create_refreshtoken,
} = require("../../../../sp/createToken");
const dotenv = require("dotenv");
dotenv.config();
const jwt = require("jsonwebtoken");
const { RefreshTokens } = require("../../../db/models");

const Admin_Token_Controller = {
  RefreshToken: async (req, res) => {
    const { refreshtoken } = req.cookies;

    try {
      if (!refreshtoken) {
        return res.status(401).json({ error: "Bạn chưa đăng nhập!" });
      } else {
        const oldRefreshToken = await RefreshTokens.findOne({
          where: {
            refreshToken: refreshtoken,
          },
        });
        if (oldRefreshToken) {
          jwt.verify(
            oldRefreshToken.refreshToken,
            process.env.REFRESH_TOKEN_KEY,
            async (err, user) => {
              if (err) {
                return res.status(500).json(err);
              } else {
                const new_access_token = create_accesstoken(user);
                const new_refresh_token = create_refreshtoken(user);

                oldRefreshToken.refreshToken = new_refresh_token;
                await oldRefreshToken.save();

                return res
                  .cookie("refreshtoken", new_refresh_token, {
                    httpOnly: true,
                    secure: true,
                    path: "/",
                    sameSite: "strict",
                    maxAge: 60 * 1000 * 60 * 24, //1 ngày
                  })
                  .status(200)
                  .json({ accesstoken: new_access_token });
              }
            }
          );
        } else {
          return res.status(403).json({ error: "Refresh Token is not valid!" });
        }
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};

module.exports = {
  Admin_Token_Controller,
};
