const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../utils/config");

function userExist(req, res, next) {
  const token = req.cookies.access_token;

  if (token) return res.status(401).json({ message: "not allowed" });

  next();
}

function jwtAuth(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) return res.status(400).json({ message: "missing token" });

  const decodedToken = jwt.verify(token, JWT_SECRET);

  if (!decodedToken) {
    return res.clearCookie("access_token").redirect("/login");
  }

  console.log("decoded token", decodedToken);

  req.userID = decodedToken.id;

  next();
}

module.exports = {
  userExist,
  jwtAuth,
};
