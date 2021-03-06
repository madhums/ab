
/**
 * Module dependencies.
 */

var express = require('express');
var serveStatic = require('serve-static');
var compression = require('compression');
var stubs = require('./stubs');

var app = express();
var env = process.env.NODE_ENV || 'development';
var port = process.env.PORT || 4000;
var options = {
  'index': [env + '.html']
};

// Middlewares
app.use(compression());
app.use(serveStatic(__dirname + '/public', options));

// Stubs
stubs(app);

// Start listening
app.listen(port);
console.log('Express app listening on port ' + port);
