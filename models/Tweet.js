const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TweetSchema = new Schema({
    // author: {
    //     type: String,
    //     required:[true,'please provide a title'],
    // },
    body: {
        type: String,
        required: [true, 'Tweet cannot be blank '],
    },
    userid:{
        type: [{ type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true
        }],
    },
    datePosted:{
        type: Date,
        default: new Date()
    },
    image: {
        type: String,
    }
});

const Tweet = mongoose.model('Tweet',TweetSchema);
module.exports = Tweet;