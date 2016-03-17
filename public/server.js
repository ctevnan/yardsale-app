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

var PORT = process.env.NODE_ENV || 3000;

var User = sequelize.define('user', {
  email: {
    type: Sequelize.STRING,
    unique: true
  },
  password: Sequelize.String,
  firstname: Sequelize.String,
  lastname: Sequelize.String
});

app.use(express.static('public'));

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(session({   //okay we arent supposed to use sessions but idk what else to use yet
  secret: 'this is a secret',
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 14
  },
  saveUninitialized: true,
  resave: false
}));

app.get('/', function (req, res) {
  res.send(index.html);
})

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

app.post('/login', function (req, res) {
  var email = req.body.email;
  var password = req.body.password;

  User.findOne({
    where: {
      email: email,
      password: password
    }
  }).then(function(user) {
    req.session.authenticated = user;  //uses a session. this might be wrong
    res.redirect('/secret');
  } else {
    res.redirect('/?msg=Invalid login');
  }
  }).catch(function(err) {
    throw err;
  });
});

app.get('/secret', function (req, res) {
  //if user is authenticated
  if(req.session.authentictated) {
    res.render('secret');
  } else {
    res.redirect('/?msg=you are not logged in');
  }
});

app.listen(PORT, function() {
  console.log('Listening on port %s', + PORT);
});  