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
  tokenSecret: process.env.SECRET_ACCESS_TOKEN || "your-secret-key",
};
