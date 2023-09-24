const mongoose = require("mongoose");
const { database } = require("./app.config");

exports.DBconnect = async () => {
  try {
    await mongoose.connect(database.url);
    console.log("Successfully connected to database");
  } catch (error) {
    console.error(error.message, database.url);
  }
};
