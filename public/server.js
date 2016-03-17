var express = require('express');
var app = express();
var PORT = 3000;
var mongojs = require('mongojs');
var db = mongojs('yardsale', ['items']);
db.on('error', function(err) {
  console.log('database error:', err);
})

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send(index.html);
})

app.listen(3000, function() {
  console.log('Listening on port: ' + PORT);
})