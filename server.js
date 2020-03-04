const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://jbucko:gobruins16@ds123790.mlab.com:23790/heroku_4nnlcm5n");

// routes
app.use(require("./routes/api.js"));
app.use(require("./routes/view.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});