const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");

const { root_router } = require("./src/router");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(
  cors({
    origin: ["https://travelsimshop.vn", "http://localhost:3000", "*"],
    credentials: true,
  })
);
app.use(cookieParser());

const publicPathDirectory = path.join(__dirname, "/src/public");
app.use("/", express.static(publicPathDirectory));

app.use("/api/v1", root_router);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

const { sequelize } = require("./src/db/models");
const handleCheckDB = async () => {
  sequelize
    .authenticate()
    .then(() => {
      console.log("Connection has been established successfully.");
    })
    .catch((err) => {
      console.error("Unable to connect to the database:", err);
    });
};

handleCheckDB();

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
