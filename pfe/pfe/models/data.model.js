const Data = require("./data.mongo");

// persist data to mongo
const addData = async data => await Data.create(data);

module.exports = { addData };
