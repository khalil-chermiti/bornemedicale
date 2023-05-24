const loginRouter = require("express").Router();
const { jwtAuth } = require("../middleware/authenticate.js");
const { loginUser } = require("../controller/login.controller");

loginRouter.post("/", loginUser);

module.exports = loginRouter;
