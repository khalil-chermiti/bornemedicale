const dataRouter = require("express").Router();
const { userExist } = require("../middleware/authenticate.js");
const { dataController } = require("../controller/data.controller.js");

dataRouter.post("/", userExist, dataController);

module.exports = dataRouter;
