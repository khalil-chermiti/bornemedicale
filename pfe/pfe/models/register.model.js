const user = require("./register.mongo");

async function createUser(userObj) {
  return await user.create({
    first_name: userObj.firstName,
    last_name: userObj.lastName,
    phone_number: userObj.phoneNumber,
    email: userObj.email,
    birth_date: userObj.birthDate,
    gender: userObj.gender,
  });
}
async function phoneExists(phoneNumber) {
  return await user.find({ phone_number: phoneNumber });
}

module.exports = {
  createUser,
  phoneExists,
};
