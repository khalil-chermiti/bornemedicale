const cookieParser = require("cookie-parser");
const express = require("express");
const cors = require("cors");
const app = express();

const loginRouter = require("./routes/login.routes");
const { corsOptions, credentials } = require("./utils/cors-config");
const registerRouter = require("./routes/register.routes");
const logoutRouter = require("./routes/logout.routes");
const dataRouter = require("./routes/data.routes");

app.use(cors(corsOptions));
app.use(credentials);
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json()); // To parse the incoming requests with JSON payloads

app.get("/", (req, res) => res.send({ message: "ok" }));

app.use("/login", loginRouter);

app.use("/register", registerRouter);

app.use("/logout", logoutRouter);

app.use("/data", dataRouter);

module.exports = app;
