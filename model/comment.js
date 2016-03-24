var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

/* comment belongs to user that commented */

var commentSchema = new Schema ({
  _owner: { type: Schema.Types.ObjectId, ref:'User'}  
  
});

var Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
