const app = require("./app");
const { PORT, DB_URL } = require("./utils/config");
const { connect } = require("./services/mongodb");
const { getAllData } = require("./models/data.model");

async function start() {
  await connect(DB_URL);

  app.listen(PORT);

  console.log(`listening on : localhost:${PORT}...`);
}

start();
