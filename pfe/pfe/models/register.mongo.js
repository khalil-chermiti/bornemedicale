const mongoose = require('mongoose');

const User = new mongoose.Schema({
    first_name : {
        type : String ,
        required : true
    },
    last_name : {
        type : String,
        required : true
    },
    phone_number: {
        type: String,
        required:true
    },
    email: {
        type: String ,
        required: false

    },
    birth_date : {
        type :String,
        required:true
    },
    gender : {
        type:String,
        required:true
    }
});

module.exports = mongoose.model('User' , User) ;
