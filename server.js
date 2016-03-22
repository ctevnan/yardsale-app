var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var logger = require('morgan');
var app = express();
var PORT = process.env.NODE_ENV || 3000;

/*mongoose connection*/
var db = 'mongodb://localhost/items';
mongoose.connect(db);

var Item = require('./model/item');
var Comment = require('./model/comment');
var User = require('./model/comment');

app.use(logger('dev'));
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.get('/', function (req, res) {
 res.send(index.html);
});

app.get('/items', function (req, res) {
  Item.find(function (err, docs) {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.send(docs);
    }
  });
});

app.post('/newitem', function (req, res) {
  var newItem = new Item (req.body);
  newItem.save(function (err, doc) {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      console.log(doc);
      res.send(doc);
    }
  });
});

app.post('/register', function (req, res) {
  var firstname = req.body.firstname;
  var lastname = req.body.lastname;
  var username = req.body.username;
  var email = req.body.email;
  var password= req.body.password;
})

app.post('/login', function (req, res) {
  var username = req.body.username;
  var email = req.body.email;
  var password = req.body.password;
});

app.listen(3000, function() {
  console.log('Listening on port %s', + 3000);
}); 