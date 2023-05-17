const User = require('./register.mongo')

async function searchByPhoneNumber(phoneNumber) {
    return await User.findOne({phoneNumber} , {__v : 0});

}
module.exports = {
    searchByPhoneNumber,
}