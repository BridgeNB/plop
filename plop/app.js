// packeage installation
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// login packages: mongodb passport
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var flash = require('connect-flash');

var routes = require('./routes/index');
var users = require('./routes/users');

// router control
// login page temporary
var home  = require('./routes/index');
var login = require('./routes/login');

var send  = require('./routes/send');
var show  = require('./routes/show');


// application
var app = express();

// view doc locations and view engine set up
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// dev log file
app.use(logger('dev'));
// jason explaination
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// cookie parser
app.use(cookieParser());
////////////////add passport///////////////////
app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(flash());
app.use(passport.session());
///////////////////////////////////////////////
// static log file
app.use(express.static(path.join(__dirname, 'public')));

// router file use
// app.use('/', show);
// app.use('/send', send);

//////////////////////add passport////////////
app.use('/', routes);
app.use('/show', show);
app.use('/send', send);

// passport config
var Account = require('./models/account');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

// mongoose
mongoose.connect('mongodb://localhost/passport_local_mongoose_express4');

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers
///////////////////////////////////////////////////


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// export app module
module.exports = app;
