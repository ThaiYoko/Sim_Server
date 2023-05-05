const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const { root_router } = require("./src/router");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

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
