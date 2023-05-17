const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../utils/config.js');
const {searchByPhoneNumber} = require('../models/login.model');


async function loginUser(req, res){
    const user =req.body ;
    console.log(user)
    if (!user || !user.phoneNumber) return res.json({"message" : "Veuillez remplir tous les champs"})
    
    // get user from database
    const dbUser =await searchByPhoneNumber(user.phoneNumber);

    // check password 
    if (user.phoneNumber != dbUser?.phoneNumber) return res.json({"message : " : "wrong phone number"})

    // sign jwt
    let id = dbUser._id.toString() ;

    const token = jwt.sign({id} , JWT_SECRET , {expiresIn : '1h'});

    return res
          .status(200)
          .cookie('access_token' ,token)
          .json({"message" : "login success"}) ;
        
}
module.exports = {
    loginUser,
}