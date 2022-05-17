const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const logger = require("./config/logger");

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5002;
const URL = process.env.DATABASE_URI;

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

mongoose.connect(URL).catch(console.error);

const connection = mongoose.connection;

connection.once("open", () => {
  logger.info("🔌 Mongo DB Connection success.");
});

const CartItems = require("./routes/cart.route");
app.use("/cart", CartItems);

app.listen(PORT, () => {
  logger.info(`Server is up and runon port ${PORT}.`);
});
