require('dotenv').config();
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const layouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const cors = require("cors");
const passport  = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const {  ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');
const debug = require('debug')(`easy-answer:${path.basename(__filename).split('.')[0]}`);

// Connect to mongo database
const dburl = process.env.MONGO_DB_URL;
console.log(`easy-answer:${path.basename(__filename).split('.')[0]}`,'connecting....', dburl);
debug(`Connecting to ${dburl}`);
mongoose.connect(dburl).then( () => { 
  'DB Connected', dburl; 
  debug('DB Connected!');
});

const app = express();

// CORS
const whitelist = [ 'http://localhost:8080' ];
const corsOptions = {
  origin: function(origin, callback){
      const originIsWhitelisted = whitelist.indexOf(origin) !== -1;
      callback(null, originIsWhitelisted);
  },
  credentials: true
};
app.use(cors());
app.options('*', cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", '*'); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('layout','layout/main');
app.use(layouts);

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());

//bodyparser.urlencoded changed to true according to slack passport example
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use(session({
//   secret: 'ironfundingdev',
//   resave: false,
//   saveUninitialized: true,
//   store: new MongoStore( { mongooseConnection: mongoose.connection })
// }));

// SLACK LOGIN
// require('./passport/slack');
// app.use(passport.initialize());
// app.use(passport.session());


// LOCAL LOGIN
app.use(session({
  secret: 'vue Secret oh yeah',
  resave: true,
  saveUninitialized: true,
  cookie : { httpOnly: true, maxAge: 2419200000 }
}));

const passportLocalStrategy = require('./passport/local');
passportLocalStrategy(passport);

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next)=> {
  res.locals.user = req.user;
  next();
});

const index = require('./routes/index');
const ticket = require('./routes/ticket');
const auth = require('./routes/auth/');
app.use('/', index);
app.use('/ticket', ticket);
app.use('/auth', auth);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname + '/public/'));

  app.use((req, res, next) => {
    res.sendfile(__dirname + '/public/index.html');
  });
}

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
