var express = require('express');
var bodyParser = require('bodyParser');
var mongoose = require('mongoose');
var app = express();
var PORT = 3000;
var mongojs = require('mongojs');
var db = mongojs('yardsale', ['items']);
db.on('error', function(err) {
  console.log('database error:', err);
})

app.use(express.static('public'));

app.use(bodyParser.urlencoded({
  extended: false
}));

app.get('/', function (req, res) {
  res.render('index', {
    msg: req.query.msg
  });
});

app.post('/register', function (req. res) {
  User.create (req.body).then(function(user) {
    req.session.authenticated = user;
    res.redirect('/secret');
  }).catch(function(err) {
    res.redirect('/?msg' + err.message);
  });  
});

app.get('/', function (req, res) {
  res.send(index.html);
})

app.listen(PORT, function() {
  console.log('Listening on port %s', + PORT);
});  