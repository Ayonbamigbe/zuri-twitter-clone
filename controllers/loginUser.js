const bcrypt = require('bcrypt');
const User = require('../models/User.js');
const path = require('path');

module.exports = (req,res)=>{
    const { username, password } = req.body;

    User.findOne({username:username},(error,user) => {
        if (error){
            const validationErrors = Object.keys(error.errors).map(key => error.errors[key].message)
            req.flash('validationErrors', validationErrors)
            req.flash('data', req.body)
            return res.redirect('/auth/login')
        }

        else if(user){
            bcrypt.compare(password, user.password, (error,same)=>{
                if(same){
                    req.session.userId = user._id
                    res.redirect('/homepage')
                } 
                else {
                    res.redirect('/auth/login')
                }
            })
        }
        else{
            res.redirect('/auth/login')
        }
    })
}