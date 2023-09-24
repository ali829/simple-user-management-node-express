require("dotenv").config();

module.exports = {
  server: {
    PORT: process.env.PORT || 4000,
    HOST_NAME: "localhost",
    API_URI: "/api/v1",
  },
  database: {
    url: process.env.DATABASE_URL,
  },
};
