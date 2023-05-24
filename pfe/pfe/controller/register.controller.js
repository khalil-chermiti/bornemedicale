const { createUser, phoneExists } = require("../models/register.model");
const { JWT_SECRET } = require("../utils/config");
const jwt = require("jsonwebtoken");

// encrypting password
async function registerUser(req, res) {
  const user = req.body;

  //check valid input
  if (
    !user ||
    !user.firstName ||
    !user.lastName ||
    !user.phoneNumber ||
    !user.email ||
    !user.birthDate ||
    !user.gender
  ) {
    return res
      .status(403)
      .json({ message: "Veuillez remplir tous les champs" });
  }
  //check for unique phoneNumber
  let phoneNumber = await phoneExists(user.numberPhone);

  if (phoneNumber.length > 0) {
    return res.status(403).send({ message: "username is taken" });
  }

  //creating user
  let userData;
  try {
    userData = await createUser(user);
  } catch (error) {
    console.log("error creating user", error);
  }

  let id = userData.id;
  //creating token
  const token = jwt.sign({ id }, JWT_SECRET, { expiresIn: "1h" });

  return res.cookie("access_token", token).status(200).json({ token: token });
}
module.exports = {
  registerUser,
};
