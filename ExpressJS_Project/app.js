const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const userRouter = require('./routes/user_route');

// #!/usr/bin / env node          // Comment

/**
 * Module dependencies.
 */

//const app = require('../app');         // Comment
const debug = require('debug')('expressjs-project:server');
const http = require('http');

/**
 * Get port from environment and store in Express.
 */

const app = express();

/**
 * Create HTTP server.
 */

const server = http.createServer(app);

// const port = normalizePort(process.env.PORT || '3000');
const port = normalizePort('4000');



const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/persondb', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
const chk_db = mongoose.connection;
chk_db.on('error', console.error.bind(console, 'connection error:'));
chk_db.once('open', function () {
  console.log(`Connection is Sucessful`);
});




app.set('port', port);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');






/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  debug('Listening on ' + bind);
}






app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/usr', userRouter);




app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

// module.exports = app;         // Comment
