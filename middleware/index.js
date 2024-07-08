require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.API_PORT;
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

const db_mysql = require("./models");
db_mysql.sequelize.sync();

const productRoute = require("./src/routes/ProductRoutes");
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(port, () => {
  console.log(`Server app listening on http://localhost:${port}`);
});
