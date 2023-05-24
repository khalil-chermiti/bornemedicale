const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../utils/config.js");
const { searchByPhoneNumber } = require("../models/login.model");

async function loginUser(req, res) {
  if (!req.body.phoneNumber)
    return res
      .status(400)
      .json({ message: "Veuillez remplir tous les champs" });

  // get user from database
  const dbUser = await searchByPhoneNumber(req.body.phoneNumber);

  // check password
  if (!dbUser?.phone_number)
    return res.status(400).json({ "message : ": "wrong phone number" });

  // sign jwt
  let id = dbUser._id.toString();

  const token = jwt.sign({ id }, JWT_SECRET, { expiresIn: "1h" });

  return res
    .status(200)
    .cookie("access_token", token, { maxAge: 1000 * 60 * 15 })
    .json({ message: "login success", token: token });
}
module.exports = {
  loginUser,
};
