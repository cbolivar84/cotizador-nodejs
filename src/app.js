var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var errorsRouter = require('./routes/errors');

// Enviorment 
const config = require('config');

var app = express();

// Config Enviorment
 console.log('Aplicacion: ' + config.get('app.name'));
 console.log('Puerto: '     + config.get('app.port'));
 console.log('BD Server: '  + config.get('dbConfig.host'));

// view engine setup 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Static
app.use('/static', express.static(__dirname + '/public'));
// Bootstrap 4 y librerías necesarias
app.use('/scripts',express.static(path.join(__dirname, '../node_modules/bootstrap/dist/css')));
app.use('/scripts',express.static(path.join(__dirname, '../node_modules/jquery/dist')));
app.use('/scripts',express.static(path.join(__dirname, '../node_modules/popper.js/dist')));
app.use('/scripts',express.static(path.join(__dirname, '../node_modules/bootstrap/dist/js')));

//app.use('/node_modules', express.static('node_modules'));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/errors', errorsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next){
  res.status(404).render('404', {title: "Sorry, page not found"});
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);  
  res.render('500');
});

module.exports = app;
