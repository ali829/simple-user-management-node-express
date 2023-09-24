const app = require("./app/index");

/** import necessary configurations for starting the app server and database */
const { server } = require("./app/configs/app.config");
const { DBconnect } = require("./app/configs/db.config");

const PORT = server.PORT;
const HOST_NAME = server.HOST_NAME;

const start = async () => {
  try {
    await DBconnect();
    app.listen(PORT, () => {
      console.log(`application running on: http://${HOST_NAME}:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

/** start the application  */
start();
