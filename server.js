var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('yardsale', ['items']);;
var PORT = process.env.NODE_ENV || 3000;

db.on('error', function(err) {
  console.log('database error:', err);
})

db.on('connection', function() {
  console.log('connection to database made');
});

app.use(express.static('public'));

app.use(bodyParser.urlencoded({
  extended: false
}));

app.get('/', function (req, res) {
  res.send(process.cwd() + "index.html");
})

app.post('/login', function (req, res) {
  var username = req.body.username;
  var email = req.body.email;
  var password = req.body.password;
});

app.listen(3000, function() {
  console.log('Listening on port %s', + 3000);
}); 