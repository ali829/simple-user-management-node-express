const express = require("express");
const app = express();


/** requiring 3th party packages */
const cookieParser = require("cookie-parser");

/**server config */
const { server } = require("./configs/app.config");

/** Importing router */
const authRouter = require("./routes/auth.routes");

/** use cookie parser middleware */
app.use(cookieParser());
/** serve static folder */
app.use(express.static("public"));
/* body parser middlewares */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/** application routers */
app.use(server.API_URI, authRouter);

module.exports = app;
