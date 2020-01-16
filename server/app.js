require('dotenv').config();
const express      = require('express');
const path         = require('path');
const favicon      = require('serve-favicon');
const logger       = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');
const layouts      = require('express-ejs-layouts');
const mongoose     = require('mongoose');
const passport  = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const {  ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');
const debug = require('debug')(`easy-answer:${path.basename(__filename).split('.')[0]}`);

// Connect to mongo database
const dburl = process.env.MONGO_DB_URL;
debug(`Connecting to ${dburl}`);
mongoose.connect(dburl).then( () => debug('DB Connected!'));

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('layout','layout/main');
app.use(layouts);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
//bodyparser.urlencoded changed to true accordin to slack passport example
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'ironfundingdev',
  resave: false,
  saveUninitialized: true,
  store: new MongoStore( { mongooseConnection: mongoose.connection })
}));

require('./passport/slack');
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next)=> {
  res.locals.user = req.user;
  next();
});

const index = require('./routes/index');
const ticket = require('./routes/ticket');
const auth = require('./routes/auth');
app.use('/', index);
app.use('/ticket', ticket);
app.use('/auth', auth);

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
