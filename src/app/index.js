const express = require("express");

const app = express();

/* body parser middlewares */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("hello world");
});

module.exports = app;
