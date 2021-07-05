const Tweet = require('../models/Tweet');

module.exports = async (req,res)=>{
    const tweet = await Tweet.findById(req.params.id)
    console.log(tweet)
    res.render('post',{
        tweet
    });
}