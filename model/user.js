var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// mongoose schema
var userSchema = new Schema({
  name: String,
  username: { type: String, required: true unique: true },
  password: { type: String, required: true unique: true },
  created_at: Date,
  updated_at: Date
});

//schema is useless w/o a model to use it
var User = mongoose.model('User', userSchema);

// on every save, add the date
userSchema.pre('save', function(next) {
  // get current date
  var currentDate = new Date();

  //channge the updated_at field to current date
  this.updated_at = currentDate;

  //if created_at doesnt exist, add it 
  if (!this.created_at)
    this.created_at = currentDate;

  next();
});

//hash passwords. dont save in plaintext  

//making this accessable to users
module.exports = User;