require('dotenv').config()
const app = require("./src/app");
const logger = require('./logger');


app.listen(process.env.NODE_SERVER_PORT, () => {
  logger.info('User Service running at port' + process.env.NODE_SERVER_PORT);
  console.log("User Service running at port " + process.env.NODE_SERVER_PORT);
});
