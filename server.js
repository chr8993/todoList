// server.js
var express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    port = 8080;

// parse request params
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
  extended: true
}));

// load our routes
var routes = require('./routes/todoRoutes.js');
routes(app);

// start our server on port 8080
app.listen(port);
console.log(`Server is listening on port: ${port}`);
