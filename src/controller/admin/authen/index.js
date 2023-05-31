const dotenv = require("dotenv");
dotenv.config();
const bcryptjs = require("bcryptjs");

const {
  create_accesstoken,
  create_refreshtoken,
} = require("../../../../sp/createToken");
const { Users, RefreshTokens } = require("../../../db/models");

const authen_admin_controller = {
  Register: async (req, res) => {
    const { username, password, email, phone, key_admin } = req.body;
    try {
      if (key_admin === process.env.ADMIN_KEY) {
        const old_admin = await Users.findOne({
          where: {
            username: username,
          },
        });
        if (old_admin) {
          return res.status(400).json({ error: "Tài khoản admin đã tồn tại!" });
        } else {
          const salt = bcryptjs.genSaltSync(15);
          const newPass = bcryptjs.hashSync(password, salt);

          await Users.create({
            username: username,
            password: newPass,
            email: email,
            phone: phone,
            admin: true,
          });
          return res.status(201).json({ mess: "Đăng ký thành thông!" });
        }
      } else {
        return res.status(400).json({ error: "Không đủ quyền truy cập!" });
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  Login: async (req, res) => {
    const { username, password, key_admin } = req.body;
    try {
      if (key_admin === process.env.ADMIN_KEY) {
        const admin = await Users.findOne({
          where: {
            username: username,
          },
        });
        if (admin) {
          if (bcryptjs.compareSync(password, admin.password)) {
            const new_access_token = create_accesstoken(admin);
            const new_refresh_token = create_refreshtoken(admin);
            const old_refreshToken = await RefreshTokens.findOne({
              where: {
                idUser: admin.id,
              },
            });
            if (old_refreshToken) {
              old_refreshToken.refreshToken = new_refresh_token;
              await old_refreshToken.save();
              admin.password = null;

              return res
                .cookie("refreshtoken", new_refresh_token, {
                  httpOnly: true,
                  secure: true,
                  path: "/",
                  sameSite: "strict",
                  maxAge: 60 * 1000 * 60 * 24, //1 ngày
                })
                .status(200)
                .json({
                  Admin: admin,
                  accesstoken: new_access_token,
                  mess: "Đăng nhập thành công!",
                });
            } else {
              await RefreshTokens.create({
                idUser: admin.id,
                refreshToken: new_refresh_token,
              });
              admin.password = null;
              return res
                .cookie("refreshtoken", new_refresh_token, {
                  httpOnly: true,
                  secure: true,
                  path: "/",
                  sameSite: "strict",
                  maxAge: 60 * 1000 * 60 * 24,
                })
                .status(200)
                .json({
                  Admin: admin,
                  accesstoken: new_access_token,
                  mess: "Đăng nhập thành công!",
                });
            }
          } else {
            return res.status(400).json({ error: "Mật khẩu không chính xác!" });
          }
        } else {
          return res
            .status(400)
            .json({ error: "Tên đăng nhập không chính xác!" });
        }
      } else {
        return res.status(403).json({ error: "Không đủ quyền truy cập!" });
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  LogOut: async (req, res) => {
    return res
      .clearCookie("refreshtoken")
      .status(200)
      .json({ mess: "Đăng xuất thành công!" })
      .end();
  },
  Edit: async (req, res) => {
    const { id } = req.params;
    const { email, phone } = req.body;
    try {
      const admin = await Users.findOne({
        where: {
          id: id,
        },
      });
      if (admin) {
        admin.email = email;
        admin.phone = phone;
        await admin.save();
        admin.password = null;
        return res
          .status(200)
          .json({ mess: "Cập nhật thành công!", Admin: admin });
      } else {
        return res.status(404).json({ error: "Admin không tồn tại!" });
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  Change_Password: async (req, res) => {
    const { id } = req.params;
    const { old_pass, new_pass } = req.body;
    try {
      const admin = await Users.findOne({
        where: {
          id: id,
        },
      });
      if (admin) {
        if (bcryptjs.compareSync(old_pass, admin.password)) {
          const salt = bcryptjs.genSaltSync(15);
          const newPass = bcryptjs.hashSync(new_pass, salt);
          admin.update({
            password: newPass,
          });
          return res.status(200).json({ mess: "Cập nhật thành công!" });
        } else {
          return res
            .status(400)
            .json({ error: "Mật khẩu củ không chính xác!" });
        }
      } else {
        return res.status(404).json({ error: "Admin không tồn tại!" });
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};
module.exports = {
  authen_admin_controller,
};
