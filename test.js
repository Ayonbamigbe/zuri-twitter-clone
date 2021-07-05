const mongoose = require('mongoose');
const Tweet = require('./models/Tweet');

mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser:true});

Tweet.create({
    title: 'Under the Bushels',
    body:"Seek thy ye 'comfort'? come thither I'll light up a fireplace for you, away from the constant call of the master, so that ye may find rest away from your duty"
}, (error, tweet) =>{
    console.log(error,tweet);
});
