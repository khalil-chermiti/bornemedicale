const dataRouter = require("express").Router();
const { jwtAuth } = require("../middleware/authenticate.js");
const { dataController } = require("../controller/data.controller.js");
const {
  getAllDataController,
} = require("../controller/getAllDataController.js");
const {
  getDataByPatient,
} = require("../controller/getDataByPatientController.js");

dataRouter.post("/", jwtAuth, dataController);
dataRouter.get("/", getAllDataController);
dataRouter.get("/patient", getDataByPatient);

module.exports = dataRouter;
