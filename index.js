const express = require('express');
// const path = require('path');

const app = new express();
const ejs = require('ejs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const Tweet = require('./models/Tweet.js');
const fileUpload = require('express-fileupload');
const expressSession = require('express-session');
const flash = require('connect-flash');

const newTweetController = require('./controllers/newTweet');
const homeController = require('./controllers/home');
const storeTweetController = require('./controllers/storeTweet');
const getTweetController = require('./controllers/getTweet');
const newUserController = require('./controllers/newUser');
const storeUserController = require('./controllers/storeUser');
const loginController = require('./controllers/login');
const loginUserController = require('./controllers/loginUser');
const logoutController = require('./controllers/logout');


const authMiddleWare = require('./middleware/authMiddleware');
const redirectIfAuthenticatedMiddleWare = require('./middleware/redirectIfAuthenticatedMiddleware');
const validateMiddleWare = require("./middleware/validationMiddleware");


app.use(expressSession({
    secret: 'keyboard cat'
}));

app.use(flash());

app.use(fileUpload());

global.loggedIn = null;

app.use("*", (req, res, next) => {
    loggedIn = req.session.userId;
    next();
});

mongoose.connect('mongodb://localhost/my_database', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.listen(4000, () => {
    console.log('Server listening on port 4000');
});

app.use('/tweets/store', validateMiddleWare);

app.get('/tweets/new', authMiddleWare,  newTweetController);
app.get('/', homeController);
app.get('/tweet/:id', getTweetController);
app.post('/tweets/store', authMiddleWare, storeTweetController);
app.get('/auth/register', redirectIfAuthenticatedMiddleWare, newUserController);
app.post('/users/register', redirectIfAuthenticatedMiddleWare, storeUserController);
app.get('/auth/login', redirectIfAuthenticatedMiddleWare, loginController);
app.post('/users/login', redirectIfAuthenticatedMiddleWare, loginUserController);
app.get('/auth/logout', logoutController);
app.use((req,res)=> res.render('notfound'));
