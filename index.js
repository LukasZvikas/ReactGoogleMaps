
const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/dev");

const app = express();

mongoose.connect(keys.MONGO_KEY);

require("./routes")(app);

const PORT = process.env.PORT || 8080;


app.listen(PORT);