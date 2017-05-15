/**
 * Created by Mitaka on 09-May-17.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema ({
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    username : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true,
        min: 7,
        max : 32
    }
}, {timestamps : true});

var Users = mongoose.model('User', userSchema);

module.exports = Users;