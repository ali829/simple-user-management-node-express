const express = require("express");

const app = express();

/** serve static folder */
app.use(express.static("public"));
/* body parser middlewares */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

module.exports = app;
