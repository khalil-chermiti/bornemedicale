const User = require("./register.mongo");

async function searchByPhoneNumber(phoneNumber) {
  return await User.findOne({ phone_number: phoneNumber });
}
module.exports = {
  searchByPhoneNumber,
};
