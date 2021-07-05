const Tweet = require('../models/Tweet.js');

module.exports = async (req,res)=>{
    const tweets = await Tweet.find({}).populate('userid');
    console.log(req.session);
    res.render('index',{
        tweets
    });
}