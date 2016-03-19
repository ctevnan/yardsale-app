var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// mongoose schema
var userSchema = new Schema({
  name: String,
  username: { type: String, required: true unique: true },
  password: { type: String, required: true },
  created_at: Date,
  updated_at: Date
});

//schema is useless w/o a model to use it
var User = mongoose.model('User', userSchema);

//making this accessable to users
module.exports = User;