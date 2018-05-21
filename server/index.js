const express = require("express");
const mongoose = require("mongoose");
require("./services/passport");
const keys = require("./config/keys");

mongoose.connect();

const app = express(keys.mongoURI);

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
