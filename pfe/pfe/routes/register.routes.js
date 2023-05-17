const registerRouter = require('express').Router() ; 
const { userExist } = require('../middleware/authenticate');
const {registerUser} = require('../controller/register.controller');

registerRouter.post('/' ,registerUser);

module.exports = registerRouter ;
 