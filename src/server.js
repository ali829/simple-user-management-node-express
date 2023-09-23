const app = require("./app/index");
const { server } = require("./app/configs/app.config");

const PORT = server.PORT;
const HOST_NAME = server.HOST_NAME;

app.listen(PORT, () => {
  console.log(`application running on: http://${HOST_NAME}:${PORT}`);
});
