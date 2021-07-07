const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

const bcrypt = require('bcrypt');

const userSchema = new Schema({
    "username":{
        "type": String,
        "required": [true,'Please provide username'],
        "unique":true
    },
    "password":{
        "type": String,
        "required":[true,'Please provide password']
    }
});

userSchema.plugin(uniqueValidator);

userSchema.pre('save', function(next){
    const user = this

    bcrypt.hash(user.password, 10, (error, hash)=>{
        user.password = hash
        next()
    });
});

const User = mongoose.model('User', userSchema);
module.exports = User;